import React from "react";

type ArticleProps = {
  children: React.ReactNode;
};

export const formArticle = ({ children }: ArticleProps) => {
  return (
    <div className="flex justify-center items-center gap-1">
      {children}
    </div>
  );
};