import TextInput from "@/components/text-input/TextInput";
import { useState } from "react";
import s from "./auth.module.css";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div id={s.authScreen}>
      <div className={s.formContainer}>
        <h1 className={s.formTitle}>Lets go!</h1>
        <form action="/login" className={s.authForm}>
          <TextInput type="text" label="Full Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          <TextInput type="email" label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextInput
            type="pasword"
            label="Password"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button className={s.submitBtn}>Cook with RecipeApp</button>
          <span className={s.divider}></span>
          <p className={s.text}>
            Already cooking with RecipeApp?
            <Link to="/login">
              {" "}
              <u>Sign in</u>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
