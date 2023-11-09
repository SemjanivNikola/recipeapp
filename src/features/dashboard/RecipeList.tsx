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
        <tr>
          <th className={s.firstCol}></th>
          <th>Title</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return (
            <tr key={item.id}>
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
