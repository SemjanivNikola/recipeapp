import { forwardRef } from "react";
import Icon from "../icons/Icon";
import SimpleInput from "./SimpleInput";
import { PasswordInputProps } from "./TextInputProps";
import s from "./text-input.module.css";

const PasswordInput = forwardRef<HTMLInputElement | null, PasswordInputProps>(function PasswordInput(
  { error, ...otherProps },
  ref
) {
  return (
    <div className="relative mb-m text-start">
      <SimpleInput {...otherProps} ref={ref}>
        <Icon name="plus" />
      </SimpleInput>
      <p className={s.inputError}>{error}</p>
    </div>
  );
});

export default PasswordInput;
