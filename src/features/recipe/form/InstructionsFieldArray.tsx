import { useFieldArray, useFormContext } from "react-hook-form";
import s from "../create-edit/create-edit.module.css";
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
        <li key={field.id} className="flex gap-s">
          <div className="relative mb-s grow">
            <input {...register(`instructions.${index}`)} className={s.listTextInput} />
            <span className={s.focusIndicator}></span>
          </div>
          <div className="flex align-center gap-s" style={{ paddingTop: "var(--m)" }}>
            <button type="button" onClick={() => append("Type instructions here")} className={s.iconButton}>
              <Icon name="plus" size={18} />
            </button>
            <button type="button" onClick={() => remove(index)} className={s.iconButtonDanger}>
              <Icon name="trash-can-outline" size={18} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InstructionsFieldArray;
