import { forwardRef } from "react";
import SimpleInput from "./SimpleInput";
import { TextInputProps } from "./TextInputProps";
import s from "./text-input.module.css";

const TextInput = forwardRef<HTMLInputElement | null, TextInputProps>(function TextInput(
  { error, ...otherProps },
  ref
) {
  return (
    <div className="relative mb-m text-start">
      <SimpleInput {...otherProps} ref={ref} />
      <p className={s.inputError}>{error}</p>
    </div>
  );
});

export default TextInput;
