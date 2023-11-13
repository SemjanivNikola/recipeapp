import { ChangeEvent, InputHTMLAttributes, forwardRef } from "react";
import s from "./checkbox.module.css";

interface CheckboxProps {
  name: InputHTMLAttributes<HTMLInputElement>["name"];
  value: InputHTMLAttributes<HTMLInputElement>["checked"];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Checkbox = forwardRef<HTMLInputElement | null, CheckboxProps>(function Checkbox({ label, value, ...props }, ref) {
  return (
    <label htmlFor={props.name} className={s.checkboxWrapper}>
      <input
        id={props.name}
        type="checkbox"
        ref={ref}
        value={value as unknown as string}
        className={s.checkbox}
        {...props}
      />
      {label}
    </label>
  );
});

export default Checkbox;
