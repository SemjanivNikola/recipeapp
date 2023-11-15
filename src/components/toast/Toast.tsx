import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, selectToast } from "./slices/toastSlice";
import "./toast.css";

const SHOW_FEEDBACK_IN_MS = 6000; // 6 seconds

const Toast = () => {
  const [animation, setAnimation] = useState("");

  const { message, type } = useSelector(selectToast);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      setAnimation("fade-in");
      setTimeout(() => {
        setAnimation("slide-right");
        dispatch(reset());
      }, SHOW_FEEDBACK_IN_MS);
    }
  }, [message]);

  if (!message) return null;

  return (
    <div id="toast" className={`${animation} ${type}`}>
      {message}
    </div>
  );
};

export default Toast;
