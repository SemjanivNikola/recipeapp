import { useState } from "react";
import Icon from "../icons/Icon";
import s from "./searchbar.module.css";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  return (
    <div id={s.searchbar}>
      <Icon name="magnify" />
      <div className={s.searchInputWrapper}>
        <input
          value={search}
          name="search"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className={s.searchInput}
        />
        <span className={s.focusIndicator}></span>
      </div>

      <button className={s.searchbarBtn}>
        <Icon name="plus" color="#fff" />
        Create recipe
      </button>
    </div>
  );
};

export default Searchbar;
