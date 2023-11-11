import { InputHTMLAttributes } from "react";
import { UseControllerProps } from "react-hook-form";

type TextInputProps = {
  isFocused?: boolean;
  error?: string;
  label: string;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  autoComplete?: InputHTMLAttributes<HTMLInputElement>["autoComplete"];
} & UseControllerProps<any>;

export default TextInputProps;
