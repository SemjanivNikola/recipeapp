import ButtonSpinner from "../spinner/ButttonSpinner";

interface ButtonLoaderProps {
  title: string;
  status: boolean;
  type?: "" | "transparent" | "danger" | "transparent-danger";
  onClick: () => void;
  icon: React.ReactElement;
}

const ButtonLoader = ({ title, status, type = "", onClick, icon }: ButtonLoaderProps) => (
  <>
    {status ? (
      <ButtonSpinner />
    ) : (
      <button type="button" className={`btn-icon ${type}`} onClick={onClick}>
        {icon}
        {title}
      </button>
    )}
  </>
);

const SubmitButton = ({ title, status }: { title: string; status: boolean }) => (
  <>
    {status ? (
      <ButtonSpinner />
    ) : (
      <button type="submit" className="action">
        {title}
      </button>
    )}
  </>
);

ButtonLoader.Submit = SubmitButton;

export default ButtonLoader;
