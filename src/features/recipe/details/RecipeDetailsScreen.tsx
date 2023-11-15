import ScreenHeader from "@/components/screen-header/ScreenHeader";
import { useFetchByIdQuery } from "@/store/services/recipeApi";
import { useParams } from "react-router-dom";
import ActionBar from "./ActionBar";
import s from "./recipe-details-screen.module.css";
import ErrorView from "../../error/ErrorView";
import { formatDateForDisplay } from "../helpers/dateHelper";

const RecipeDetailsScreen = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const { data, error, isFetching } = useFetchByIdQuery(recipeId as string);

  if (isFetching) {
    return <h1>Loading</h1>;
  } else if (error || !data) {
    return <ErrorView error={error} />;
  }

  const dateCreated = formatDateForDisplay(new Date(data.dateCreated));

  return (
    <>
      <ScreenHeader title={data.title} />
      <div className={s.content}>
        <ActionBar recipeId={recipeId as string} />
        <div className={s.card}>
          <p>
            <span className={s.pTitle}>Author: </span>
            {data.authorId}
          </p>
          <p>
            <span className={s.pTitle}>Created: </span>
            {dateCreated}
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
