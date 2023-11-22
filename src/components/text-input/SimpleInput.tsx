import { forwardRef } from "react";
import Icon from "../icons/Icon";
import { SimpleInputProps } from "./TextInputProps";
import s from "./text-input.module.css";

const SimpleInput = forwardRef<HTMLInputElement | null, SimpleInputProps>(function TextInput(
  { label, isFocused = false, error, icon, children, ...otherProps },
  ref
) {
  return (
    <div className={s.inputWrapper} data-error={!!error}>
      <Icon name={icon} color="var(--black)" />
      <input id={otherProps.name} ref={ref} autoFocus={isFocused} className={s.textInput} {...otherProps} />
      {children}
      <label
        id={`${otherProps.name}-label`}
        htmlFor={otherProps.name}
        className={s.inputLabel}
        style={{ transform: "translateY(-50%)" }}
      >
        {label}
      </label>
      <span className={s.focusIndicator}></span>
    </div>
  );
});

export default SimpleInput;
