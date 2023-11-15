import s from "./error-screen.module.css";
import { isClientBaseError, isFetchBaseQueryError } from "./helpers";

interface QueryErrorHelper {
  message: string;
}

function extractErrorMesage(data?: object) {
  if (data != null) {
    if (isClientBaseError(data)) return data.error;
    else if (isFetchBaseQueryError(data)) return (data.data as QueryErrorHelper).message;
  }

  return "Error while loading data";
}

/**
 * @param *error* is used to handle expected or unexpected exceptions
 */
const ErrorView = ({ error }: { error?: object }) => {
  const message = extractErrorMesage(error);

  function onClick() {
    history.back();
  }

  return (
    <div className={s.errorContainer}>
      <div className={s.contentContainer}>
        <h1>Whoops!</h1>
        <p>{message}</p>
        <button onClick={onClick}>Go back</button>
      </div>
    </div>
  );
};

export default ErrorView;
