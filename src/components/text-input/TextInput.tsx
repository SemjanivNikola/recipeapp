import { forwardRef } from "react";
import TextInputProps from "./TextInputProps";
import s from "./text-input.module.css";

const TextInput = forwardRef<HTMLInputElement | null, TextInputProps>(function TextInput(
  { label, isFocused = false, error, autoComplete, ...otherProps },
  ref
) {
  return (
    <div className="relative mb-m text-start">
      <div className="relative">
        <input id={otherProps.name} ref={ref} autoComplete={autoComplete} autoFocus={isFocused} {...otherProps} />
        <label
          id={`${otherProps.name}-label`}
          htmlFor={otherProps.name}
          className={`${s.inputLabel} absolute px-s`}
          style={{ transform: "translateY(-50%)" }}
        >
          {label}
        </label>
        <span className={s.focusIndicator}></span>
      </div>
      <p className={s.inputError}>{error}</p>
    </div>
  );
});

export default TextInput;
