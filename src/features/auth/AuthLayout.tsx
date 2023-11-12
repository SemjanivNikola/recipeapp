import s from "./auth.module.css";

interface AuthLayoutProps {
  title: string;
  footerText: string;
  link: React.ReactElement;
  render: React.ReactElement;
}
const AuthLayout = ({ title, footerText, link, render }: AuthLayoutProps) => {
  return (
    <div id={s.authScreen}>
      <div className={s.formContainer}>
        <h1 className={s.formTitle}>{title}</h1>
        <div style={{ width: "100%" }}>
          {render}
          <span className={s.divider}></span>
          <p className={s.text}>
            {footerText + " "}
            {link}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
