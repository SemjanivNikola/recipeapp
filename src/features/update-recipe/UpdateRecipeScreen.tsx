import { useFetchByIdQuery } from "@/store/services/recipeApi";
import { useParams } from "react-router-dom";
import ErrorView from "../error/ErrorView";
import CreateUpdateLayout from "./CreateUpdateLayout";
import UpdateFormWrapper from "./UpdateFormWrapper";

const UpdateRecipeScreen = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const { data, error, isFetching } = useFetchByIdQuery(recipeId as string);

  if (isFetching) {
    return <h1>Loading</h1>;
  } else if (error || !data) {
    return <ErrorView error={error} />;
  }

  return (
    <CreateUpdateLayout title={`Update ${data.title} recipe`}>
      <UpdateFormWrapper recipe={data} />
    </CreateUpdateLayout>
  );
};

export default UpdateRecipeScreen;
