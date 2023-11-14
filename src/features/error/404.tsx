import s from "./error-screen.module.css";
const NoMatch404 = () => {
  function onClick() {
    history.back();
  }

  return (
    <div className={s.errorContainer}>
      <div className={s.contentContainer}>
        <h1>404</h1>
        <p>There is nothing here :/</p>
        <button onClick={onClick}>Go back</button>
      </div>
    </div>
  );
};

export default NoMatch404;
