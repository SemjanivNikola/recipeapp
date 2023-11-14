import s from "./error-screen.module.css";

const ErrorScreen = ({ message }: { message: string }) => {
  function onClick() {
    history.back();
  }

  return (
    <div id={s.errorScreen}>
      <div className={s.contentContainer}>
        <h1>Whoops!</h1>
        <p>{message}</p>
        <button onClick={onClick}>Go back</button>
      </div>
    </div>
  );
};

export default ErrorScreen;
