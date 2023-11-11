import { Link } from "react-router-dom";
import FormController from "./FormController";
import s from "./auth.module.css";
import LoginForm from "./LoginForm";

const LoginScreen = () => {
  return (
    <div id={s.authScreen}>
      <div className={s.formContainer}>
        <h1 className={s.formTitle}>Welcome back!</h1>
        <div style={{ width: "100%" }}>
          <FormController>
            <LoginForm />
          </FormController>
          <span className={s.divider}></span>
          <p className={s.text}>
            Don't have an account?
            <Link to="/register">
              {" "}
              <u>Sign up</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
