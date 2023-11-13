import ScreenHeader from "@/components/screen-header/ScreenHeader";
import Searchbar from "@/components/searchbar/Searchbar";
import { useFetchAllQuery } from "@/store/services/recipeApi";
import RecipeList from "./RecipeList";
import s from "./dashboard.module.css";

const DashboardScreen = () => {
  const { data, error, isFetching } = useFetchAllQuery(null);

  if (error || !data) {
    return <div>Error loading albums.</div>;
  }

  return (
    <>
      <ScreenHeader title="Dashboard" />
      <div className={s.content}>
        <Searchbar />
        {isFetching ? <h1>Loading</h1> : <RecipeList list={data} />}
      </div>
    </>
  );
};

export default DashboardScreen;
