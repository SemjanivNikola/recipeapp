import { useEffect, useState } from "react";

const SHOW_FEEDBACK_IN_MS = 2000; // 6 seconds

const toast = {
  type: "success",
  message: "test message",
};

const Toast = () => {
  const [animation, setAnimation] = useState("");

  const hasMessage = true;

  useEffect(() => {
    if (hasMessage)
      setTimeout(() => {
        setAnimation("slide-right");
      }, SHOW_FEEDBACK_IN_MS);
    else setAnimation("fade-in");
  }, [hasMessage]);

  if (hasMessage)
    return (
      <div id="toast" className={`${animation} ${toast.type}`}>
        {toast.message}
      </div>
    );

  return null;
};

export default Toast;
