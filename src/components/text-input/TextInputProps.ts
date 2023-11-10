import { InputHTMLAttributes } from "react";

type TextInputProps = {
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  name: string;
  autoComplete?: InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  isFocused?: boolean;
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  error?: string;
  label: string;
  readOnly?: InputHTMLAttributes<HTMLInputElement>["readOnly"];
  required?: InputHTMLAttributes<HTMLInputElement>["required"];
  onChange: (e: any) => void;
};

export default TextInputProps;
