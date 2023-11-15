import Icon from "@/components/icons/Icon";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectRecipeIds } from "../slices/recipeSlice";
import { isRecipeOwner } from "./recipeUtils";

const ActionBar = ({ recipeId }: { recipeId: string }) => {
  const recipeIds = useSelector(selectRecipeIds);
  const isOwner = isRecipeOwner(recipeIds, recipeId);

  if (isOwner)
    return (
      <div className="flex align-center justify-end gap-m mb-m">
        <button type="button" className="btn-icon transparent">
          <Icon name="pencil-outline" color="#000" />
          <Link to={`/edit-recipe/${recipeId}`} style={{ color: "inherit" }}>
            Edit
          </Link>
        </button>
        <button type="button" className="btn-icon danger">
          <Icon name="trash-can-outline" color="#fff" />
          Delete
        </button>
      </div>
    );

  return null;
};

export default ActionBar;
