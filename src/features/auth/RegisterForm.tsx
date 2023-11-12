import TextInput from "@/components/text-input/TextInput";
import { Controller, useForm } from "react-hook-form";
import { RegisterForm as FormType } from "./AuthFormType";
import s from "./auth.module.css";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const { handleSubmit, control, formState } = useForm<FormType>({
    defaultValues: initialValues,
    mode: "onBlur",
  });

  const onSubmit = (data: FormType) => {
    alert(JSON.stringify(data));
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
          <TextInput type="password" label="Password" error={formState.errors?.password?.message} {...props} />
        )}
      />
      <button type="submit" className={s.submitBtn}>
        Sign In
      </button>
    </form>
  );
};

export default RegisterForm;
