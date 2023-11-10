import TextInput from "@/components/text-input/TextInput";
import { useState } from "react";
import s from "./auth.module.css";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div id={s.authScreen}>
      <div className={s.loginContainer}>
        <h1 className={s.formTitle}>Welcome back!</h1>
        <form action="/login" className={s.authForm}>
          <TextInput type="email" label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextInput
            type="pasword"
            label="Password"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button className={s.submitBtn}>Sign In</button>
          <span className={s.divider}></span>
          <p className={s.text}>
            Don't have an account?
            <Link to="/register">
              {" "}
              <u>Sign up</u>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
