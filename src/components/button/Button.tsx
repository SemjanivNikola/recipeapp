import Spinner from "../spinner/Spinner";

interface ButtonProps {
  title: string;
  status: boolean;
  type?: "" | "transparent" | "danger" | "transparent-danger";
  onClick: () => void;
  icon: React.ReactElement;
}

const Button = ({ title, status, type = "", onClick, icon }: ButtonProps) => (
  <button type="button" className={`btn-icon ${type}`} onClick={onClick} disabled={status}>
    {status ? (
      <Spinner />
    ) : (
      <>
        {icon}
        {title}
      </>
    )}
  </button>
);

const SubmitButton = ({ title, status }: { title: string; status: boolean }) => (
  <button type="submit" className="action" disabled={status}>
    {status ? <Spinner /> : <>{title}</>}
  </button>
);

Button.Submit = SubmitButton;

export default Button;
