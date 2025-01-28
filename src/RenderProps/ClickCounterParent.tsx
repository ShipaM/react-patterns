import { ClickCounterChild } from "./ClickCounterChild";

export const ClickCounterParent = () => {
  return (
    <ClickCounterChild
      render={({ count, increment }) => (
        <div>
          <h2>Кастомный счётчик</h2>
          <p>Количество кликов: {count}</p>
          <button onClick={increment}>Прибавить 1</button>
        </div>
      )}
    />
  );
};
