import ScreenHeader from "@/components/screen-header/ScreenHeader";
import Searchbar from "@/components/searchbar/Searchbar";
import RecipeList from "../../dashboard/RecipeList";

const recipeList = [
  { id: "1", title: "Grilled beef steak and asparagus", dateCreated: "2023-01-01", tags: ["stake", "grill"] },
];

const MyRecipesScreen = () => {
  return (
    <>
      <ScreenHeader title="My recipes" />
      <div className="p-lg">
        <Searchbar />
        <RecipeList list={recipeList} />
      </div>
    </>
  );
};

export default MyRecipesScreen;
