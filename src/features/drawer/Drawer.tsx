import Icon from "@/components/icons/Icon";
import { useDispatch } from "react-redux";
import { logout } from "../auth/slices/authSlice";
import { NavLink } from "react-router-dom";

const Drawer = () => {
  const dispatch = useDispatch();

  return (
    <div id="drawer">
      <div style={{ height: "8rem" }}>Logo</div>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active " : "") + "drawer-link"}>
        <Icon name="dashboard" />
        <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>DASHBOARD</span>
      </NavLink>
      <NavLink to="/my-recipes" className={({ isActive }) => (isActive ? "active " : "") + "drawer-link"}>
        <Icon name="layers" />
        <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>MY RECIPES</span>
      </NavLink>
      <NavLink to="/create-recipe" className={({ isActive }) => (isActive ? "active " : "") + "drawer-link"}>
        <Icon name="layers-plus" />
        <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>CREATE RECIPE</span>
      </NavLink>
      <button className="drawer-btn" onClick={() => dispatch(logout())}>
        <Icon name="signout" />
        <span style={{ letterSpacing: 1.6, fontWeight: "700", fontSize: 14 }}>SIGN OUT</span>
      </button>
    </div>
  );
};

export default Drawer;
