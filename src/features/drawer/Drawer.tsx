import Icon from "@/components/icons/Icon";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../auth/slices/authSlice";

const Drawer = () => {
  const dispatch = useDispatch();

  return (
    <div id="drawer" className="relative">
      <div style={{ height: "8rem" }}>Logo</div>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active " : "") + "drawer-link p-m"}>
        <Icon name="dashboard" color="#fff" />
        DASHBOARD
      </NavLink>
      <NavLink to="/my-recipes" className={({ isActive }) => (isActive ? "active " : "") + "drawer-link p-m"}>
        <Icon name="layers" color="#fff" />
        MY RECIPES
      </NavLink>
      <NavLink to="/create-recipe" className={({ isActive }) => (isActive ? "active " : "") + "drawer-link p-m"}>
        <Icon name="layers-plus" color="#fff" />
        CREATE RECIPE
      </NavLink>
      <button className="drawer-btn p-m" onClick={() => dispatch(logout())}>
        <Icon name="signout" color="#fff" />
        SIGN OUT
      </button>
    </div>
  );
};

export default Drawer;
