import { useController } from "react-hook-form";
import TextInputProps from "./TextInputProps";
import s from "./text-input.module.css";

const TextInput = ({ label, isFocused = false, error, type, ...controllerProps }: TextInputProps) => {
  const { field } = useController(controllerProps);

  return (
    <div className="relative mb-m text-start">
      <div className="relative">
        <input autoFocus={isFocused} type={type} {...field} />
        <label
          id={`${controllerProps.name}-label`}
          htmlFor={controllerProps.name}
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
};

export default TextInput;
