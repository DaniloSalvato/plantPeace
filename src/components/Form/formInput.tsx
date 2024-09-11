import { ComponentProps, forwardRef } from "react";

type InputProps = ComponentProps<"input"> 

export const formInput = forwardRef<HTMLInputElement, InputProps>(
  ({...data }, ref) => {
    return (
      <input
        {...data}
        ref={ref}
        className="px-4 py-2 h-auto w-full border border-customGray rounded text-sm text-black bg-customWisper"
      />
    );
  }
);
