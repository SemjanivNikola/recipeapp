import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../icons/Icon";
import s from "./searchbar.module.css";

const Searchbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onClick = useCallback(() => {
    navigate("/create-recipe");
  }, []);

  return (
    <div id={s.searchbar}>
      <Icon name="magnify" color="var(--dark)" />
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

      <button className="flex align-center gap-s action fab-small" onClick={onClick}>
        <Icon name="plus" color="var(--primary-dark)" />
        Create recipe
      </button>
    </div>
  );
};

export default Searchbar;
