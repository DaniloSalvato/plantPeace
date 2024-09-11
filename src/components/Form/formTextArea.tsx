import { ComponentProps, forwardRef } from "react";

type TextAreaProps = ComponentProps<"textarea">;

export const formTextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ ...props }, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className="border border-customGray rounded px-4 py-2 pb-10 text-sm text-black bg-customWisper"
      />
    );
  }
);
