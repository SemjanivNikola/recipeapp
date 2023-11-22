import { forwardRef, useCallback, useState } from "react";
import Icon from "../icons/Icon";
import SimpleInput from "./SimpleInput";
import { PasswordInputProps } from "./TextInputProps";
import s from "./text-input.module.css";

enum InputType {
  TEXT = "text",
  PASSWORD = "password",
}

const PasswordInput = forwardRef<HTMLInputElement | null, PasswordInputProps>(function PasswordInput(
  { error, ...otherProps },
  ref
) {
  const [shouldShowPass, setShouldShowPass] = useState(false);

  const PassIcon = useCallback(() => {
    return shouldShowPass ? <Icon name="eye-outline" /> : <Icon name="eye-closed" />;
  }, [shouldShowPass]);

  const type = shouldShowPass ? InputType.TEXT : InputType.PASSWORD;

  function onClick() {
    setShouldShowPass(!shouldShowPass);
  }

  return (
    <div className="relative mb-m text-start">
      <SimpleInput type={type} {...otherProps} ref={ref}>
        <button type="button" onClick={onClick} className={s.togglePassTypeBtn}>
          <PassIcon />
        </button>
      </SimpleInput>
      <p className={s.inputError}>{error}</p>
    </div>
  );
});

export default PasswordInput;
