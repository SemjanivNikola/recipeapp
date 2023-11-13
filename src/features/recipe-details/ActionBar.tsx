import { useSelector } from "react-redux";
import s from "./recipe-details-screen.module.css";
import { isRecipeOwner } from "./recipeUtils";
import { selectRecipeIds } from "./slices/recipeSlice";

const ActionBar = ({ recipeId }: { recipeId: string }) => {
  const recipeIds = useSelector(selectRecipeIds);
  const isOwner = isRecipeOwner(recipeIds, recipeId);

  if (isOwner)
    return (
      <div className={s.actionBar}>
        <button className={s.btnTransparent}>Edit</button>
        <button className={s.btnDanger}>Delete</button>
      </div>
    );

  return null;
};

export default ActionBar;
