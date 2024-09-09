import React from "react";

type TitleProps = {
  children: React.ReactNode;
};

export const formTitle = ({ children }: TitleProps) => {
  return (
      <h1 className="font-inter text-customLunarGreen font-semibold text-lg border-b border-customGray">
        {children}
      </h1>
  );
};
