import { Recipe } from "@/store/services/recipeApi";
import { useNavigate } from "react-router-dom";
import s from "./dashboard.module.css";

interface RecipeListProps {
  list: Recipe[];
}

const RecipeList = ({ list }: RecipeListProps) => {
  const navigate = useNavigate();

  function onClick(id: string) {
    navigate("/recipe/" + id);
  }

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
          <RecipeListItem key={item.id} item={item} index={index} onClick={onClick} />
        ))}
      </tbody>
    </table>
  );
};

const RecipeListItem = ({ item, index, onClick }: { item: Recipe; index: number; onClick: (id: string) => void }) => (
  <tr onClick={() => onClick(item.id)}>
    <td>{index}</td>
    <td>{item.title}</td>
    <td>{item.dateCreated}</td>
  </tr>
);

export default RecipeList;
