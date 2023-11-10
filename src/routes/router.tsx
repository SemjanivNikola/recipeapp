import DashboardScreen from "@/features/dashboard/DashboardScreen";
import MyRecipesScreen from "@/features/my-recipes/MyRecipesScreen";
import RecipeDetailsScreen from "@/features/recipe-details/RecipeDetailsScreen";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
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

const Router = createBrowserRouter([
  // TODO: Auth - Public routes
  //   { path: "/login", element: <Login /> },
  //   { path: "/register", element: <Register /> },

  // Private routes
  {
    path: "/",
    element: <PrivateRouter />,
    children: [
      {
        path: "/",
        element: <DashboardScreen />,
      },
      {
        path: "/my-recipes",
        element: <MyRecipesScreen />,
      },
      { path: "create-recipe", element: <MyRecipesScreen /> },
      { path: "recipe/:recipeId", element: <RecipeDetailsScreen /> },
    ],
  },
]);

export default Router;
