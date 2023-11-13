import ScreenHeader from "@/components/screen-header/ScreenHeader";
import { useFetchByIdQuery } from "@/store/services/recipeApi";
import { useParams } from "react-router-dom";

const RecipeDetailsScreen = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const { data, error, isFetching } = useFetchByIdQuery(recipeId as string);

  if (error) {
    return <div>Error while loading.</div>;
  } else if (isFetching) {
    return <h1>Loading</h1>;
  } else if (!data) {
    return <div>Error while loading.</div>;
  }

  return (
    <>
      <ScreenHeader title={data.title} />
      <h1>RecipeDetailsScreen</h1>
    </>
  );
};

export default RecipeDetailsScreen;
