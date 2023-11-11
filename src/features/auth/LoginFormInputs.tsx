import TextInput from "@/components/text-input/TextInput";
import { Control, FormState } from "react-hook-form";
import { LoginForm } from "./AuthFormType";

const LFormInputs = ({ control, errors }: { control: Control; errors: FormState<LoginForm>["errors"] }) => {
  return (
    <>
      <TextInput
        control={control}
        name="email"
        rules={{
          required: true,
        }}
        type="email"
        label="Email"
        autoComplete="email"
        error={errors?.email?.message}
      />
      <TextInput
        control={control}
        name="password"
        rules={{
          required: true,
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?!@#$%^&*()-_+=.,~[\]{};:'"|/><()])[A-Za-z\d?!@#$%^&*()-_+=.,~[\]{};:'"|/><()]{4,}$/,
            message: "Ne valja",
          },
        }}
        type="password"
        label="Password"
        error={errors?.password?.message}
      />
    </>
  );
};

export default LFormInputs;
