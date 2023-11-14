import { useCallback, useState } from "react";
import Icon from "../icons/Icon";
import s from "./searchbar.module.css";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onClick = useCallback(() => {
    navigate("/create-recipe");
  }, []);

  return (
    <div id={s.searchbar}>
      <Icon name="magnify" />
      <div className={s.searchInputWrapper}>
        <input
          value={search}
          name="search"
          type="text"
          placeholder="Search by title"
          onChange={(e) => setSearch(e.target.value)}
          className={s.searchInput}
        />
        <span className={s.focusIndicator}></span>
      </div>

      <button className={s.searchbarBtn} onClick={onClick}>
        <Icon name="plus" color="#fff" />
        Create recipe
      </button>
    </div>
  );
};

export default Searchbar;
