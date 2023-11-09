import "./App.css";
import Dashboard from "./features/dashboard/Dashboard";
import Drawer from "./features/drawer/Drawer";

function App() {
  return (
    <main id="main">
      <Drawer />
      <Dashboard />
    </main>
  );
}

export default App;
