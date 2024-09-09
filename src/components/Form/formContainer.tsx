import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export const formContainer = ({ children }: ContainerProps) => {
  return (
    <article className="flex flex-col font-inter mt-4 text-sm">
      {children}
    </article>
  );
};
