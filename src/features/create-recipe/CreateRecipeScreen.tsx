import CreateUpdateLayout from "../update-recipe/CreateUpdateLayout";
import CreateFormWrapper from "./CreateFormWrapper";

const CreateRecipeScreen = () => {
  return (
    <CreateUpdateLayout title="Create new recipe">
      <CreateFormWrapper />
    </CreateUpdateLayout>
  );
};

export default CreateRecipeScreen;
