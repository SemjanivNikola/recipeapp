import Icon from "@/components/icons/Icon";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectRecipeIds } from "../slices/recipeSlice";
import { isRecipeOwner } from "./recipeUtils";
import DeleteAction from "./DeleteAction";

const ActionBar = ({ recipeId }: { recipeId: string }) => {
  
  const recipeIds = useSelector(selectRecipeIds);
  const isOwner = isRecipeOwner(recipeIds, recipeId);

  if (isOwner)
    return (
      <div className="flex align-center justify-end gap-m mb-m">
        <Link to={`/edit-recipe/${recipeId}`}>
          <button type="button" className="btn-icon transparent">
            <Icon name="pencil-outline" color="var(--dark)" />
            Edit
          </button>
        </Link>
        <DeleteAction recipeId={recipeId} />
      </div>
    );

  return null;
};

export default ActionBar;
