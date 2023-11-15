import Icon from "@/components/icons/Icon";
import { ChangeEvent, useState } from "react";
import s from "./create-recipe-screen.module.css";

const ListInput = ({ list, update }: { list: string[]; update: (list: string[]) => void }) => {
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

  return (
    <>
      <div className={s.row}>
        <div className="relative mb-s grow">
          <input value={value} onChange={onChange} className={s.listTextInput} />
          <span className={s.focusIndicator}></span>
        </div>
        <button onClick={add} className={s.iconButton} type="button">
          <Icon name="plus" size={18} color="#fff" />
        </button>
      </div>
      <ul className={s.valueList}>
        {localList.map((item, index) => (
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
