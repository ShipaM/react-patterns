import { useState } from "react";
import "./App.css";
import { Card } from "./ComponentInjection/Card";
import Accordion from "./CompoundComponents/Accordeon";
import { ClickCounterParent } from "./RenderProps/ClickCounterParent";
import { DataFetcher } from "./RenderProps/DataFetcher";
import { PaginationChild } from "./RenderProps/PaginationChild";
import { Parent } from "./RenderProps/Parent";
import { ParentComponent } from "./RenderProps/ParrentComponent";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Albums = {
  userId: number;
  id: number;
  title: string;
};

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  return (
    <>
      <h1>Render props</h1>
      <div className="render-props">
        <ParentComponent />
        {/* // Получаем такой код
      <div>
        <h1>Hello World</h1>
      </div>
    */}
      </div>
      <div className="render-props">
        <Parent />
        {/* 
        // Получаем такой код
        <div>
          <h1 style="color: #7d7d7d;">Hello World</h1>
          <div>Какое-то описание...</div>
        </div>
        */}
      </div>
      <div className="render-props">
        <ClickCounterParent />
      </div>
      <div className="render-props">
        {/* //Определение компонента с UI, предоставляемым по умолчанию: */}
        <PaginationChild totalItems={100} itemsPerPage={10} />
      </div>
      <div className="render-props">
        {/* Определение компонента с кастомным UI: */}
        <PaginationChild
          totalItems={100}
          itemsPerPage={10}
          render={({ currentPage, totalPages, goToPage }) => (
            <div>
              <h2>Кастомная пагинация</h2>
              <button onClick={() => goToPage(1)} disabled={currentPage === 1}>
                Первая
              </button>
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Назад
              </button>
              <span>
                Страница {currentPage} из {totalPages}
              </span>
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Вперёд
              </button>
              <button
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                Последняя
              </button>
            </div>
          )}
        />
      </div>
      <div className="render-props">
        <DataFetcher<Todo[], Error>
          url="https://jsonplaceholder.typicode.com/todos"
          render={({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>{error.message}</p>;
            return (
              <ul>
                {data?.slice(0, 5).map((post) => (
                  <li>{post.title}</li>
                ))}
              </ul>
            );
          }}
        />
      </div>
      <div className="render-props">
        <DataFetcher<Todo[], Error>
          url="https://jsonplaceholder.typicod.com/todos"
          render={({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>{error.message}</p>;
            return (
              <ul>
                {data?.slice(0, 5).map((post) => (
                  <li>{post.title}</li>
                ))}
              </ul>
            );
          }}
        />
      </div>
      <div className="render-props">
        <DataFetcher<Albums[], Error>
          url="https://jsonplaceholder.typicode.com/albums"
          render={({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>{error.message}</p>;
            return (
              <ul>
                {data?.slice(0, 3).map((post) => (
                  <li>{post.title}</li>
                ))}
              </ul>
            );
          }}
        />
      </div>
      <div className="render-props">
        <DataFetcher<Albums[], Error>
          url="https://jsonplaceholder.typicode.com/album"
          render={({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>{error.message}</p>;
            return (
              <ul>
                {data?.slice(0, 3).map((post) => (
                  <li>{post.title}</li>
                ))}
              </ul>
            );
          }}
        />
      </div>
      <hr />
      <h1>Component Injection</h1>
      <div className="component-injection">
        <Card header={<h3>Component title</h3>} footer={<button>More</button>}>
          Content
        </Card>
      </div>
      <hr />
      <h1>Compound Components</h1>
      <div className="compound-components">
        <Accordion>
          <Accordion.Item
            title="Section1"
            isActive={activeIndex === 0}
            onToggle={() => handleToggle(0)}
          >
            Content for section1
          </Accordion.Item>
          <Accordion.Item
            title="Section2"
            isActive={activeIndex === 1}
            onToggle={() => handleToggle(1)}
          >
            Content for section2
          </Accordion.Item>
          <Accordion.Item
            title="Section3"
            isActive={activeIndex === 2}
            onToggle={() => handleToggle(2)}
          >
            Content for section3
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default App;
