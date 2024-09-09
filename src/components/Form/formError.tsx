import React from "react";

type ErrorProps = {
  children: React.ReactNode;
};

export const formError = ({ children }: ErrorProps) => {
  return <span className="text-red-700 text-xs mt-1">{children}</span>;
};
