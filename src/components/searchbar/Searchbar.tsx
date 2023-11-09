import Icon from "../icons/Icon";
import s from "./searchbar.module.css";

const Searchbar = () => {
  return (
    <div id={s.searchbar}>
      <Icon name="magnify" />
      <input type="text" />
    </div>
  );
};

export default Searchbar;
