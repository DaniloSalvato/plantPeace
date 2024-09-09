import { ComponentProps, forwardRef } from "react";

type InputProps = ComponentProps<"input"> 

export const formInput = forwardRef<HTMLInputElement, InputProps>(
  ({...data }, ref) => {
    return (
      <input
        {...data}
        ref={ref}
        className="px-4 py-2 mt-2 w-full border border-customGray rounded text-sm text-black bg-customWisper"
      />
    );
  }
);
