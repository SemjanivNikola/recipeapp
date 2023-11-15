import ScreenHeader from "@/components/screen-header/ScreenHeader";
import Searchbar from "@/components/searchbar/Searchbar";
import Skeleton from "@/components/skeleton/Skeleton";
import { useFetchAllQuery } from "@/store/services/recipeApi";
import RecipeList from "./RecipeList";
import s from "./dashboard.module.css";
import ErrorView from "../error/ErrorView";

const DashboardScreen = () => {
  const { data, error, isFetching } = useFetchAllQuery(null);

  if (error) {
    return <ErrorView />;
  }

  return (
    <>
      <ScreenHeader title="Dashboard" />
      <div className={s.content}>
        <Searchbar />
        {isFetching ? <Skeleton.List /> : <RecipeList list={data} />}
      </div>
    </>
  );
};

export default DashboardScreen;
