import ButtonSpinner from "@/components/spinner/ButttonSpinner";
import { Recipe, useDeleteRecipeMutation, useUpdateRecipeMutation } from "@/store/services/recipeApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../auth/slices/authSlice";
import s from "../create-recipe/create-recipe-screen.module.css";
import { formatDateForDisplay } from "../create-recipe/dateHelper";
import RecipeForm from "./RecipeForm";

interface RecipeType {
  title: string;
  authorId: string;
  dateCreated: string;
  instructions: string[];
  tags: string[];
}

const UpdateFormWrapper = ({ recipe }: { recipe: Recipe }) => {
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
        <div className={s.buttonRow}>
          {updateStatus.isLoading ? (
            <ButtonSpinner />
          ) : (
            <button type="submit" className={s.submitBtn}>
              Update
            </button>
          )}
          {deleteStatus.isLoading ? (
            <ButtonSpinner />
          ) : (
            <button onClick={onDelete} type="button" className={s.transparentBtn}>
              Delete
            </button>
          )}
        </div>
      }
    />
  );
};

export default UpdateFormWrapper;
