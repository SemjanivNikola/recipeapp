import Button from "@/components/button/Button";
import Icon from "@/components/icons/Icon";
import { useDeleteRecipeMutation } from "@/store/services/recipeApi";
import { useNavigate } from "react-router-dom";

const DeleteAction = ({ recipeId }: { recipeId: string }) => {
  const navigate = useNavigate();
  const [deleteRecipe, status] = useDeleteRecipeMutation();

  const onDelete = async () => {
    await deleteRecipe(recipeId)
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
    <Button
      title="Delete"
      status={status.isLoading}
      type="danger"
      onClick={onDelete}
      icon={<Icon name="trash-can-outline" />}
    />
  );
};

export default DeleteAction;
