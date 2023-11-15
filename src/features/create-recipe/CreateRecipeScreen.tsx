import CreateEditLayout from "../update-recipe/CreateEditLayout";
import CreateFormWrapper from "./CreateFormWrapper";

const CreateRecipeScreen = () => {
  return (
    <CreateEditLayout title="Create new recipe">
      <CreateFormWrapper />
    </CreateEditLayout>
  );
};

export default CreateRecipeScreen;
