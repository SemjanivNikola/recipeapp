import CreateEditLayout from "./CreateEditLayout";
import CreateFormWrapper from "../form/CreateFormWrapper";

const CreateRecipeScreen = () => {
  return (
    <CreateEditLayout title="Create new recipe">
      <CreateFormWrapper />
    </CreateEditLayout>
  );
};

export default CreateRecipeScreen;
