import ScreenHeader from "@/components/screen-header/ScreenHeader";
import { useFetchByIdQuery } from "@/store/services/recipeApi";
import { useParams } from "react-router-dom";
import s from "./recipe-details-screen.module.css";

const RecipeDetailsScreen = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const { data, error, isFetching } = useFetchByIdQuery(recipeId as string);

  if (error) {
    return <div>Error while loading.</div>;
  } else if (isFetching) {
    return <h1>Loading</h1>;
  } else if (!data) {
    return <div>Error while loading.</div>;
  }

  return (
    <>
      <ScreenHeader title={data.title} />
      <div className={s.content}>
        <div className={s.card}>
          <p>
            <span className={s.pTitle}>Author: </span>
            {data.authorId}
          </p>
          <p>
            <span className={s.pTitle}>Created: </span>
            {data.dateCreated}
          </p>
        </div>
        <div className={s.pillWrapper}>
          {data.tags.map((tag) => (
            <div className={s.pillTag}>{tag}</div>
          ))}
        </div>
        <p>
          <span className={s.pTitle}>Instructions: </span>
        </p>
        <ol className={s.instructionList}>
          {data.instructions.map((instruction) => (
            <li>{instruction}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default RecipeDetailsScreen;
