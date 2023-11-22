import Icon from "@/components/icons/Icon";
import { ChangeEvent, useState } from "react";
import s from "../create-edit/create-edit.module.css";

const ListInput = ({ list, label, update }: { list: string[]; label: string; update: (list: string[]) => void }) => {
  const [value, setValue] = useState("");
  const [localList, setLocalList] = useState(list);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  function add() {
    // Had to use helper, because localList still has previous value and can't be sent as param in update()
    const newList = [value, ...localList];
    setLocalList(newList);
    setValue("");
    update(newList);
  }

  function deleteItem(indexToRemove: number) {
    const updatedList = localList.filter((_, index) => indexToRemove !== index);
    setLocalList(updatedList);
    update(updatedList);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      add();
    }
  }

  const isEmptyValue = value === "";

  return (
    <>
      <p className={s.label}>{label}</p>
      <div className="flex align-center gap-m">
        <div className="relative mb-s grow">
          <input value={value} onChange={onChange} className={s.listTextInput} onKeyDown={onKeyDown} />
          <span className={s.focusIndicator}></span>
        </div>
        <button onClick={add} className={s.iconButton} type="button" disabled={isEmptyValue}>
          <Icon name="plus" size={18} color="var(--white)" />
        </button>
      </div>
      <ul className={s.valueList}>
        {localList.map((item, index) => (
          <li key={index} onClick={() => deleteItem(index)}>
            {item}
            <Icon name="trash-can-outline" size={18} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListInput;
