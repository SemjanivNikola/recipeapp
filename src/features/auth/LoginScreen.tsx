import TextInput from "@/components/text-input/TextInput";
import { useState } from "react";
import s from "./auth.module.css";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

type LoginForm = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { register, handleSubmit } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = (data) => console.log(data);

  return (
    <div id={s.authScreen}>
      <div className={s.loginContainer}>
        <h1 className={s.formTitle}>Welcome back!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={s.authForm}>
          <TextInput type="email" label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextInput
            {...register("password", {
              required: true,
            })}
            type="pasword"
            label="Password"
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
