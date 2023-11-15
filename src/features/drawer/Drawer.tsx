import Icon from "@/components/icons/Icon";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../auth/slices/authSlice";
import Logo from "@/components/logo/Logo";

const Drawer = () => {
  const dispatch = useDispatch();

  return (
    <div id="drawer" className="relative">
      <Logo small />
      <NavLink to="/" className={({ isActive }) => (isActive ? "active " : "") + "drawer-link p-m"}>
        <Icon name="dashboard" />
        DASHBOARD
      </NavLink>
      <NavLink to="/my-recipes" className={({ isActive }) => (isActive ? "active " : "") + "drawer-link p-m"}>
        <Icon name="layers" />
        MY RECIPES
      </NavLink>
      <NavLink to="/create-recipe" className={({ isActive }) => (isActive ? "active " : "") + "drawer-link p-m"}>
        <Icon name="layers-plus" />
        CREATE RECIPE
      </NavLink>
      <button className="drawer-btn p-m" onClick={() => dispatch(logout())}>
        <Icon name="signout" />
        SIGN OUT
      </button>
    </div>
  );
};

export default Drawer;
