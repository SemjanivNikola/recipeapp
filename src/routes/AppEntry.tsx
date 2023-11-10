import Drawer from "@/features/drawer/Drawer";
import "./App.css";

function AppEntry({ children }: { children: React.ReactElement }) {
  return (
    <main id="main">
      <Drawer />
      <div className="screen">{children}</div>
    </main>
  );
}

export default AppEntry;
