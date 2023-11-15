import { useFieldArray, useFormContext } from "react-hook-form";
import s from "./create-recipe-screen.module.css";
import Icon from "@/components/icons/Icon";

const InstructionsFieldArray = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "instructions",
  });
  return (
    <ul className={s.fieldArray}>
      {fields.map((field, index) => (
        <li key={field.id} className={s.row}>
          <div className="relative mb-s grow">
            <input {...register(`instructions.${index}`)} className={s.listTextInput} />
            <span className={s.focusIndicator}></span>
          </div>
          <div className={s.iconButtonRow}>
            <button type="button" onClick={() => append("Type instructions here")} className={s.iconButton}>
              <Icon name="plus" size={18} color="#fff" />
            </button>
            <button type="button" onClick={() => remove(index)} className={s.iconButtonDanger}>
              <Icon name="trash-can-outline" size={18} color="#fff" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InstructionsFieldArray;
