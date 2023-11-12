import { ChangeEvent, InputHTMLAttributes } from "react";

const Checkbox = (props: {
  name: InputHTMLAttributes<HTMLInputElement>["name"];
  value: string; // InputHTMLAttributes<HTMLInputElement>["checked"]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      type="checkbox"
      className="rounded border-gray-300 shadow-sm focus:ring-indigo-500 appearance-none cursor-pointer"
      {...props}
    />
  );
};

export default Checkbox;
