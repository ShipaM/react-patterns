import React, { ReactNode } from "react";

type RenderFunction = (text: string) => ReactNode;

interface ChildComponentProps {
  render: RenderFunction;
}

//Главная смысл шаблона - передача в качестве props функции, которая будет принимать какие-то данные от дочернего компонента и отрисовывать их так, как будет указано в родительском.
export const ChildComponent: React.FC<ChildComponentProps> = ({ render }) => {
  const text = "Hello World";
  return <div>{render(text)}</div>;
};
