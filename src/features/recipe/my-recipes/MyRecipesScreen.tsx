import ScreenHeader from "@/components/screen-header/ScreenHeader";
import Searchbar from "@/components/searchbar/Searchbar";
import RecipeList from "../../dashboard/RecipeList";
import s from "../../dashboard/table-list.module.css";

const recipeList = [
  { id: "1", title: "Grilled beef steak and asparagus", dateCreated: "2023-01-01", tags: ["stake", "grill"] },
];

const MyRecipesScreen = () => {
  return (
    <div className={s.screen}>
      <ScreenHeader title="My recipes" />
      <div className={s.content}>
        <Searchbar />
        <RecipeList list={recipeList} />
      </div>
    </div>
  );
};

export default MyRecipesScreen;
