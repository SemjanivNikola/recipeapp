import s from "./dashboard.module.css";

interface RecipeListProps {
  list: {
    id: string;
    title: string;
    dateCreated: string;
    tags: string[];
  }[];
}

const RecipeList = ({ list }: RecipeListProps) => {
  return (
    <table className={s.tableList}>
      <thead>
        <th className={s.firstCol}></th>
        <th>Title</th>
        <th>Created</th>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return (
            <tr>
              <td>{index}</td>
              <td>{item.title}</td>
              <td>{item.dateCreated}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RecipeList;
