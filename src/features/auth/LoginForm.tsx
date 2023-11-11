import { ReactElement, cloneElement } from "react";
import { useForm } from "react-hook-form";
import { LoginForm as FormType } from "./AuthFormType";
import s from "./auth.module.css";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = ({ children }: { children: ReactElement }) => {
  const { handleSubmit, control, formState } = useForm<FormType>({
    defaultValues: initialValues,
    mode: "onBlur",
  });

  const onSubmit = (data: FormType) => {
    alert(JSON.stringify(data));
  };

  const inputs = cloneElement(children, { control: control, errors: formState.errors });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.authForm}>
      {inputs}
      <button type="submit" className={s.submitBtn}>
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
