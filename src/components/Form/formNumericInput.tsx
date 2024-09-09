import { ComponentProps, forwardRef } from "react";

import { NumericFormat, NumericFormatProps } from "react-number-format";
import { Form } from "./";

type NumericInput = ComponentProps<"input"> & NumericFormatProps;

export const formNumericInput = forwardRef<HTMLInputElement, NumericInput>(
  ({ ...props }, ref) => {
    return (
      <NumericFormat 
        {...props}
        customInput={()=> <Form.Input {...props} ref={ref}/>}
        className="px-4 py-2 mt-2 w-full border border-customGray rounded text-sm text-black bg-customWisper"
      />
    );
  }
);
