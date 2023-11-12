import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import AuthLayout from "./AuthLayout";

const RegisterScreen = () => {
  return (
    <AuthLayout
      title="Lets go!"
      footerText="Already cooking with RecipeApp?"
      link={
        <Link to="/login">
          <u>Sign in</u>
        </Link>
      }
      render={<RegisterForm />}
    />
  );
};

export default RegisterScreen;
