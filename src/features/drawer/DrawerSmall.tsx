import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DrawerSmall = ({ children }: { children: React.ReactElement }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  function onClick() {
    setOpen(!open);
  }

  return (
    <div id="drawer" onClick={onClick} className={open ? "open" : "close"}>
      {children}
    </div>
  );
};

export default DrawerSmall;
