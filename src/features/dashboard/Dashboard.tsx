import ScreenHeader from "@/components/screen-header/ScreenHeader";
import s from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={s.screen}>
      <ScreenHeader title="Dashboard" />
      <div className="content">
        <div className="search-bar"></div>
        <table></table>
      </div>
    </div>
  );
};

export default Dashboard;
