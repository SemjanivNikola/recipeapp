import Icon from "../icons/Icon";
import s from "./searchbar.module.css";

const Searchbar = () => {
  return (
    <div id={s.searchbar}>
      <Icon name="magnify" />
      <input type="text" style={{ flexGrow: 1 }} />
      <button className={s.searchbarBtn}>
        <Icon name="plus" color="#fff" />
        Create recipe
      </button>
    </div>
  );
};

export default Searchbar;
