import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import s from "./auth.module.css";

const RegisterScreen = () => {
  return (
    <div id={s.authScreen}>
      <div className={s.formContainer}>
        <h1 className={s.formTitle}>Lets go!</h1>
        <div style={{ width: "100%" }}>
          <RegisterForm />
          <span className={s.divider}></span>
          <p className={s.text}>
            Already cooking with RecipeApp?
            <Link to="/login">
              {" "}
              <u>Sign in</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
