import { SerializedError } from "@reduxjs/toolkit";
import s from "./error-screen.module.css";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { isFetchBaseQueryError } from "./helpers";

interface QueryErrorHelper {
  message: string;
}

const ErrorScreen = ({ error }: { error: SerializedError | FetchBaseQueryError }) => {
  const message = isFetchBaseQueryError(error) ? (error.data as QueryErrorHelper).message : error.message;

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
