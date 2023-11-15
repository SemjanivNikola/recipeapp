import LoginScreen from "@/features/auth/LoginScreen";
import RegisterScreen from "@/features/auth/RegisterScreen";
import DashboardScreen from "@/features/dashboard/DashboardScreen";
import MyRecipesScreen from "@/features/my-recipes/MyRecipesScreen";
import RecipeDetailsScreen from "@/features/recipe-details/RecipeDetailsScreen";
import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import NoMatch404 from "@/features/error/404";
import CreateRecipeScreen from "@/features/create-recipe/CreateRecipeScreen";
import EditRecipeScreen from "@/features/update-recipe/EditRecipeScreen";

const Router = createBrowserRouter([
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
      { path: "/create-recipe", element: <CreateRecipeScreen /> },
      { path: "/recipe/:recipeId", element: <RecipeDetailsScreen /> },
      { path: "/edit-recipe/:recipeId", element: <EditRecipeScreen /> },
    ],
  },
  { path: "*", element: <NoMatch404 /> },
]);

export default Router;
