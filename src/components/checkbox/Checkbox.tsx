import { ChangeEvent, InputHTMLAttributes } from "react";
import s from "./checkbox.module.css";

const Checkbox = ({
  value,
  label,
  ...props
}: {
  name: InputHTMLAttributes<HTMLInputElement>["name"];
  value: InputHTMLAttributes<HTMLInputElement>["checked"];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}) => {
  return (
    <label htmlFor={props.name} className={s.checkboxWrapper}>
      <input type="checkbox" value={value as unknown as string} className={s.checkbox} {...props} />
      {label}
    </label>
  );
};

export default Checkbox;
