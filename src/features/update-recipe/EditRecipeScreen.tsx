import { useFetchByIdQuery } from "@/store/services/recipeApi";
import { useParams } from "react-router-dom";
import ErrorView from "../error/ErrorView";
import CreateEditLayout from "./CreateEditLayout";
import EditFormWrapper from "./EditFormWrapper";

const EditRecipeScreen = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const { data, error, isFetching } = useFetchByIdQuery(recipeId as string);

  if (isFetching) {
    return <h1>Loading</h1>;
  } else if (error || !data) {
    return <ErrorView error={error} />;
  }

  return (
    <CreateEditLayout title={`Update ${data.title} recipe`}>
      <EditFormWrapper recipe={data} />
    </CreateEditLayout>
  );
};

export default EditRecipeScreen;
