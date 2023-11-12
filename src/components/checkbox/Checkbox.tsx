import { ChangeEvent, InputHTMLAttributes } from "react";
import s from "./checkbox.module.css";

const Checkbox = ({
  value,
  text,
  ...props
}: {
  name: InputHTMLAttributes<HTMLInputElement>["name"];
  value: InputHTMLAttributes<HTMLInputElement>["checked"];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  text: string;
}) => {
  return (
    <div>
      <input type="checkbox" value={value as unknown as string} className={s.checkbox} {...props} />
      <p>{text}</p>
    </div>
  );
};

export default Checkbox;
