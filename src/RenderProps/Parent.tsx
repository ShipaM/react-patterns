import { ChildComponent } from "./ChildComponent";

export const Parent = () => {
  return (
    <ChildComponent
      render={(text) => {
        return (
          <div style={{ color: "#7d7d7d" }}>
            <h1>{text}</h1>
            <div>Какое-то описание...</div>
          </div>
        );
      }}
    />
  );
};
