import { Control, FormState } from "react-hook-form";

export type LoginForm = {
  email: string;
  password: string;
};

export type RegisterForm = {
  fullName: string;
  email: string;
  password: string;
};

export interface LoginFormProps {
  control: Control;
  errors: FormState<LoginForm>["errors"];
}
