import Icon from "@/components/icons/Icon";
import { ChangeEvent, useState } from "react";
import s from "./create-recipe-screen.module.css";

const ListInput = ({ list, update }: { list: string[]; update: (list: string[]) => void }) => {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  function add() {
    list.push(value);
    update(list);
    setValue("");
  }

  function deleteItem(index: number) {
    update(list.splice(index, 1));
  }

  return (
    <>
      <div className={s.row}>
        <div className="relative mb-s grow">
          <input value={value} onChange={onChange} className={s.listTextInput} />
          <span className={s.focusIndicator}></span>
        </div>
        <button onClick={add} className={s.iconButton}>
          <Icon name="plus" size={18} color="#fff" />
        </button>
      </div>
      <ul className={s.valueList}>
        {list.map((item, index) => (
          <li key={index} onClick={() => deleteItem(index)}>
            {item}
            <Icon name="trash-can-outline" size={18} color="#fff" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListInput;
