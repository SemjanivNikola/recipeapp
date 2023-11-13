import LoginScreen from "@/features/auth/LoginScreen";
import RegisterScreen from "@/features/auth/RegisterScreen";
import DashboardScreen from "@/features/dashboard/DashboardScreen";
import MyRecipesScreen from "@/features/my-recipes/MyRecipesScreen";
import RecipeDetailsScreen from "@/features/recipe-details/RecipeDetailsScreen";
import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";

const Router = createBrowserRouter([
  // TODO: Auth - Public routes
  { path: "/login", element: <LoginScreen /> },
  { path: "/register", element: <RegisterScreen /> },

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
      { path: "/create-recipe", element: <MyRecipesScreen /> },
      { path: "/recipe/:recipeId", element: <RecipeDetailsScreen /> },
    ],
  },
]);

export default Router;
