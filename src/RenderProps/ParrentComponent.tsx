import { ChildComponent } from "./ChildComponent";

export const ParentComponent: React.FC = () => {
  return <ChildComponent render={(text) => <h1>{text}</h1>} />;
};
