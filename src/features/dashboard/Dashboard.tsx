import ScreenHeader from "@/components/screen-header/ScreenHeader";
import s from "./dashboard.module.css";
import Searchbar from "@/components/searchbar/Searchbar";
import RecipeList from "./RecipeList";

const recipeList = [
  { id: "1", title: "Grilled beef steak and asparagus", dateCreated: "2023-01-01", tags: ["stake", "grill"] },
];

const Dashboard = () => {
  return (
    <div className={s.screen}>
      <ScreenHeader title="Dashboard" />
      <div className="content">
        <Searchbar />
        <RecipeList list={recipeList} />
      </div>
    </div>
  );
};

export default Dashboard;
