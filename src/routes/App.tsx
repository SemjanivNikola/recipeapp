import Toast from "@/components/toast/Toast";
import Drawer from "@/features/drawer/Drawer";
import "./App.css";

const App = ({ children }: { children: React.ReactElement }) => {
  return (
    <main id="main">
      <Drawer />
      <div className="screen">{children}</div>
      <Toast />
    </main>
  );
};

export default App;
