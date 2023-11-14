import s from "./error-screen.module.css";
const _404ErrorScreen = () => {
  function onClick() {
    history.back();
  }

  return (
    <div id={s.errorScreen}>
      <div className={s.contentContainer}>
        <h1>404</h1>
        <p>There is nothing here :/</p>
        <button onClick={onClick}>Go back</button>
      </div>
    </div>
  );
};

export default _404ErrorScreen;
