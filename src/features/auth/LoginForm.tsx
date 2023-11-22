import Button from "@/components/button/Button";
import Checkbox from "@/components/checkbox/Checkbox";
import TextInput from "@/components/text-input/TextInput";
import { useLoginMutation } from "@/store/services/userApi";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginForm as FormType } from "./AuthFormType";
import s from "./auth.module.css";
import { rememberMe } from "./slices/authSlice";
import PasswordInput from "@/components/text-input/PasswordInput";

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [login, status] = useLoginMutation();
  const dispatch = useDispatch();
  const { handleSubmit, control, formState, setError } = useForm<FormType>({
    defaultValues: initialValues,
    mode: "onBlur",
  });

  const onSubmit = async (data: FormType) => {
    await login({ email: data.email, password: data.password })
      .unwrap()
      .then(() => {
        if (data.rememberMe) dispatch(rememberMe());
        return navigate("/");
      })
      .catch((err: { data: { message: string } }) => {
        setError("password", { message: err.data.message });
      });
  };

  console.log("render?");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.authForm}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: props }) => (
          <TextInput
            type="email"
            label="Email"
            autoComplete="email"
            icon="email-outline"
            isFocused
            error={formState.errors?.email?.message}
            {...props}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: props }) => (
          <PasswordInput label="Password" icon="lock-outline" error={formState.errors?.password?.message} {...props} />
        )}
      />

      <Controller
        name="rememberMe"
        control={control}
        render={({ field }) => <Checkbox {...field} label="Remember me" />}
      />

      <div className={s.growBtn}>
        <Button.Submit title="Sign In" status={status.isLoading} />
      </div>
    </form>
  );
};

export default LoginForm;
