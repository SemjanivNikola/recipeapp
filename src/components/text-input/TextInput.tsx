import { forwardRef } from "react";
import TextInputProps from "./TextInputProps";
import s from "./text-input.module.css";
import Icon from "../icons/Icon";

const TextInput = forwardRef<HTMLInputElement | null, TextInputProps>(function TextInput(
  { label, isFocused = false, error, autoComplete, icon, ...otherProps },
  ref
) {
  return (
    <div className="relative mb-m text-start">
      <div className={s.inputWrapper}>
        <Icon name={icon} color="var(--black)" />
        <input
          id={otherProps.name}
          ref={ref}
          autoComplete={autoComplete}
          autoFocus={isFocused}
          className={s.textInput}
          {...otherProps}
        />
        <label
          id={`${otherProps.name}-label`}
          htmlFor={otherProps.name}
          className={`${s.inputLabel} absolute`}
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
