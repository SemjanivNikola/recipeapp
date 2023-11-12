import { Navigate, Outlet } from "react-router-dom";
import AppEntry from "./AppEntry";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const PrivateRouter = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <AppEntry>
      <Outlet />
    </AppEntry>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRouter;
