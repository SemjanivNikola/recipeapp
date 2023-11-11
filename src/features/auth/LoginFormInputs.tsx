import TextInput from "@/components/text-input/TextInput";
import { Control, Controller, FormState } from "react-hook-form";
import { LoginForm } from "./AuthFormType";

const LFormInputs = ({ control, errors }: { control: Control; errors: FormState<LoginForm>["errors"] }) => {
  return (
    <>
      <Controller
        name="email"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: props }) => (
          <TextInput type="email" label="Email" autoComplete="email" error={errors?.email?.message} {...props} />
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
            message: "Ne valja",
          },
        }}
        render={({ field: props }) => (
          <TextInput type="password" label="Password" error={errors?.password?.message} {...props} />
        )}
      />
    </>
  );
};

export default LFormInputs;
