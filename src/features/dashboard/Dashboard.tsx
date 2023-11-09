import ScreenHeader from "@/components/screen-header/ScreenHeader";
import s from "./dashboard.module.css";
import Searchbar from "@/components/searchbar/Searchbar";

const Dashboard = () => {
  return (
    <div className={s.screen}>
      <ScreenHeader title="Dashboard" />
      <div className="content">
        <Searchbar />
        <table></table>
      </div>
    </div>
  );
};

export default Dashboard;
