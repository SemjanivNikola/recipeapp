import { Navigate, Outlet } from "react-router-dom";
import AppEntry from "./AppEntry";

// TODO:Authentication
function isAuthenticated() {
  return true;
}

const PrivateRouter = () => {
  return isAuthenticated() ? (
    <AppEntry>
      <Outlet />
    </AppEntry>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRouter;
