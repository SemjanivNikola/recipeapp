import ScreenHeader from "@/components/screen-header/ScreenHeader";
import Searchbar from "@/components/searchbar/Searchbar";
import RecipeList from "./RecipeList";
import s from "./dashboard.module.css";

const recipeList = [
  { id: "1", title: "Grilled beef steak and asparagus", dateCreated: "2023-01-01", tags: ["stake", "grill"] },
];

const DashboardScreen = () => {
  return (
    <>
      <ScreenHeader title="Dashboard" />
      <div className={s.content}>
        <Searchbar />
        <RecipeList list={recipeList} />
      </div>
    </>
  );
};

export default DashboardScreen;
