import Button from "@/components/button/Button";
import Icon from "@/components/icons/Icon";
import { Recipe, useDeleteRecipeMutation, useUpdateRecipeMutation } from "@/store/services/recipeApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../auth/slices/authSlice";
import { formatDateForDisplay } from "../helpers/dateHelper";
import FormActionBar from "./FormActionBar";
import RecipeForm from "./RecipeForm";

interface RecipeType {
  title: string;
  authorId: string;
  dateCreated: string;
  instructions: string[];
  tags: string[];
}

const EditFormWrapper = ({ recipe }: { recipe: Recipe }) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const [updateRecipe, updateStatus] = useUpdateRecipeMutation();
  const [deleteRecipe, deleteStatus] = useDeleteRecipeMutation();

  const initialValues = {
    title: recipe.title,
    authorId: recipe.authorId,
    dateCreated: recipe.dateCreated,
    instructions: recipe.instructions,
    tags: recipe.tags,
  };

  const staticData = {
    userName: user?.name ?? "-",
    dateCreated: formatDateForDisplay(new Date(recipe.dateCreated)),
  };

  const onSubmit = async (data: RecipeType) => {
    const formData = {
      recipeId: recipe.id,
      recipe: data,
    };
    await updateRecipe(formData)
      .unwrap()
      .then((response) => {
        // response.data.message
        console.log("response >> ", response);
        history.back();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onDelete = async () => {
    await deleteRecipe(recipe.id)
      .unwrap()
      .then((response) => {
        // response.data.message
        console.log("response >> ", response);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <RecipeForm
      initialValues={initialValues}
      staticData={staticData}
      onAPISubmit={onSubmit}
      formActionButtons={
        <FormActionBar title="Update" status={updateStatus.isLoading}>
          <Button
            title="Delete"
            status={deleteStatus.isLoading}
            type="transparent-danger"
            onClick={onDelete}
            icon={<Icon name="trash-can-outline" color="var(--danger)" />}
          />
        </FormActionBar>
      }
    />
  );
};

export default EditFormWrapper;
