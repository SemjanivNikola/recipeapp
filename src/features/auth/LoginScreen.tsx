import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import LoginForm from "./LoginForm";

const LoginScreen = () => {
  return (
    <AuthLayout
      title="Welcome back!"
      footerText="Don't have an account?"
      link={
        <Link to="/register">
          <u>Sign up</u>
        </Link>
      }
      render={<LoginForm />}
    />
  );
};

export default LoginScreen;
