import Icon from "@/components/icons/Icon";
import Logo from "@/components/logo/Logo";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../auth/slices/authSlice";
import DrawerLarge from "./DrawerLarge";
import DrawerSmall from "./DrawerSmall";

const INITIAL_SIZE = window.innerWidth > 756;

const BaseDrawer = () => {
  const dispatch = useDispatch();
  return (
    <div className="relative">
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

const Drawer = () => {
  const [isLarge, setIsLarge] = useState(INITIAL_SIZE);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 756) setIsLarge(true);
    else setIsLarge(false);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      {isLarge ? (
        <DrawerLarge>
          <BaseDrawer />
        </DrawerLarge>
      ) : (
        <DrawerSmall>
          <BaseDrawer />
        </DrawerSmall>
      )}
    </>
  );
};

export default Drawer;
