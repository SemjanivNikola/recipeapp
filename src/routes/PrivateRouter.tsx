import { Navigate, Outlet } from "react-router-dom";
import App from "./App";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const PrivateRouter = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <App>
      <Outlet />
    </App>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRouter;
