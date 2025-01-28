import React, { useState } from "react";

interface ClickCounterProps {
  render: (data: { count: number; increment: () => void }) => React.ReactNode;
}

export const ClickCounterChild: React.FC<ClickCounterProps> = ({ render }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return <div>{render({ count, increment })}</div>;
};
