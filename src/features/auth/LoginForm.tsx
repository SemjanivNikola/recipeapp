import TextInput from "@/components/text-input/TextInput";
import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import withFormController from "./withFormController";
import { LoginFormProps } from "./AuthFormType";

export const LoginForm = withFormController<LoginFormProps>(
  forwardRef<HTMLDivElement | null, LoginFormProps>(({ control, errors }, ref) => {
    return (
      <div ref={ref}>
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
      </div>
    );
  })
);
