import { ReactNode } from "react";
import "./Accordeon.css";

type AccordionProps = {
  children: ReactNode;
};

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onToggle: () => void;
};

const Accordion = ({ children }: AccordionProps) => {
  return <div className="accordion">{children}</div>;
};

const AccordionItem = ({
  title,
  children,
  isActive,
  onToggle,
}: AccordionItemProps) => (
  <div className="accordion-item">
    <div className="accordion-header" onClick={onToggle}>
      <h3>{title}</h3>
      <span>{isActive ? "-" : "+"}</span>
    </div>
    {isActive && <div className="accordion-body">{children}</div>}
  </div>
);

AccordionItem.displayName = "AccordionItem";
Accordion.Item = AccordionItem;

export default Accordion;
