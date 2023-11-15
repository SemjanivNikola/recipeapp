import logoSvg from "@/assets/logo.svg";
import s from "./logo.module.css";

const Logo = ({ small = false }: { small?: boolean }) => {
  return (
    <div className={small ? s.smallLogoWrapper : s.logoWeapper}>
      <img src={logoSvg} alt="logo" />
      {/* <LogoSvg /> */}
    </div>
  );
};

export default Logo;
