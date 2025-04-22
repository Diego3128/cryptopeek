import { ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
};
export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <p className="error-message">{children}</p>;
};
