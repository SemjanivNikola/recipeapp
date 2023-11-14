import s from "./error-screen.module.css";
import { isClientBaseError, isFetchBaseQueryError } from "./helpers";

interface QueryErrorHelper {
  message: string;
}

function extractErrorMesage(data: object) {
  if (isClientBaseError(data)) return data.error;
  else if (isFetchBaseQueryError(data)) return (data.data as QueryErrorHelper).message;

  return "Something else, wier happend :/";
}

const ErrorScreen = ({ error }: { error: object }) => {
  const message = extractErrorMesage(error);

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
