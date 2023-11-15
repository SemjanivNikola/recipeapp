import { useFetchByIdQuery } from "@/store/services/recipeApi";
import { useParams } from "react-router-dom";
import ErrorView from "../../error/ErrorView";
import CreateEditLayout from "./CreateEditLayout";
import EditFormWrapper from "../form/EditFormWrapper";
import Skeleton from "@/components/skeleton/Skeleton";

const EditRecipeScreen = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const { data, error, isFetching } = useFetchByIdQuery(recipeId as string);

  if (isFetching) {
    return <Skeleton.CreateEdit />;
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
