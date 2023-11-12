import TextInput from "@/components/text-input/TextInput";
import { useLoginMutation } from "@/store/services/userApi";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginForm as FormType } from "./AuthFormType";
import s from "./auth.module.css";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const { handleSubmit, control, formState, setError } = useForm<FormType>({
    defaultValues: initialValues,
    mode: "onBlur",
  });

  const onSubmit = async (data: FormType) => {
    await login(data)
      .then(() => navigate("/"))
      .catch((err: string) => {
        setError("root", { message: err }, { shouldFocus: true });
      });
  };

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
          <TextInput type="password" label="Password" error={formState.errors?.password?.message} {...props} />
        )}
      />
      <button type="submit" className={s.submitBtn}>
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
