import { Recipe } from "@/store/services/recipeApi";
import { memo } from "react";
import s from "./dashboard.module.css";

interface RecipeListProps {
  list: Recipe[];
}

const RecipeList = ({ list }: RecipeListProps) => {
  return (
    <table className={s.tableList}>
      <thead>
        <tr>
          <th className={s.firstCol}></th>
          <th>Title</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <RecipeListItem key={item.id} item={item} index={index} />
        ))}
      </tbody>
    </table>
  );
};

const RecipeListItem = memo(({ item, index }: { item: Recipe; index: number }) => (
  <tr>
    <td>{index}</td>
    <td>{item.title}</td>
    <td>{item.dateCreated}</td>
  </tr>
));

export default RecipeList;
