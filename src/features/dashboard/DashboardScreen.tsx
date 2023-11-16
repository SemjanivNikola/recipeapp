import ScreenHeader from "@/components/screen-header/ScreenHeader";
import Searchbar from "@/components/searchbar/Searchbar";
import Skeleton from "@/components/skeleton/Skeleton";
import { useFetchAllQuery } from "@/store/services/recipeApi";
import ErrorView from "../error/ErrorView";
import RecipeList from "./RecipeList";

const DashboardScreen = () => {
  const { data, error, isFetching } = useFetchAllQuery(null);

  if (error) {
    return <ErrorView />;
  }

  return (
    <div className="screen-wrapper list">
      <ScreenHeader title="Dashboard" />
      <div className="p-lg">
        <Searchbar />
        {isFetching ? <Skeleton.List /> : <RecipeList list={data} />}
      </div>
    </div>
  );
};

export default DashboardScreen;
