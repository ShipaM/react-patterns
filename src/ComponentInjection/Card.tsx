import { ReactNode } from "react";

type CardProps = {
  header?: ReactNode; // header can be a ReactNode (any valid JSX)
  footer?: ReactNode; // footer can be a ReactNode (any valid JSX)
  children: ReactNode; // children can be any valid JSX
};

export const Card: React.FC<CardProps> = ({ header, footer, children }) => {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};
