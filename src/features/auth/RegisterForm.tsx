import Button from "@/components/button/Button";
import TextInput from "@/components/text-input/TextInput";
import { useRegisterMutation } from "@/store/services/userApi";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RegisterForm as FormType } from "./AuthFormType";
import s from "./auth.module.css";
import PasswordInput from "@/components/text-input/PasswordInput";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const [register, status] = useRegisterMutation();
  const navigate = useNavigate();
  const { handleSubmit, control, formState, setError } = useForm<FormType>({
    defaultValues: initialValues,
    mode: "onBlur",
  });

  const onSubmit = async (data: FormType) => {
    await register(data)
      .then(() => navigate("/login"))
      .catch((err: string) => {
        setError("root", { message: err }, { shouldFocus: true });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.authForm}>
      <Controller
        name="fullName"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: props }) => (
          <TextInput
            type="text"
            label="Full Name"
            autoComplete="false"
            icon="user-outline"
            isFocused
            error={formState.errors?.email?.message}
            {...props}
          />
        )}
      />

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
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?!@#$%^&*()-_+=.,~[\]{};:'"|/><()])[A-Za-z\d?!@#$%^&*()-_+=.,~[\]{};:'"|/><()]{4,}$/,
            message: "Try with at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character",
          },
        }}
        render={({ field: props }) => (
          <PasswordInput label="Password" icon="lock-outline" error={formState.errors?.password?.message} {...props} />
        )}
      />

      <div className={s.growBtn}>
        <Button.Submit title="Sign Up" status={status.isLoading} />
      </div>
    </form>
  );
};

export default RegisterForm;
