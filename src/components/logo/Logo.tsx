import logoSvg from "@/assets/logo.svg";
import s from "./logo.module.css";

const Logo = () => {
  return (
    <div className={s.logoWeapper}>
      <img src={logoSvg} alt="logo" />
      {/* <LogoSvg /> */}
    </div>
  );
};

export default Logo;
