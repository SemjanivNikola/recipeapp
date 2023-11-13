import Spinner from "./Spinner";
import s from "./spinner.module.css";

const ButtonSpinner = () => {
  return (
    <div className={s.buttonSpinner}>
      <Spinner />
    </div>
  );
};

export default ButtonSpinner;
