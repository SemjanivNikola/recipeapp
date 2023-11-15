import ScreenHeader from "@/components/screen-header/ScreenHeader";
import Skeleton from "@/components/skeleton/Skeleton";
import { useFetchByIdQuery } from "@/store/services/recipeApi";
import { useParams } from "react-router-dom";
import ErrorView from "../../error/ErrorView";
import { formatDateForDisplay } from "../helpers/dateHelper";
import ActionBar from "./ActionBar";
import s from "./recipe-details-screen.module.css";

const RecipeDetailsScreen = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const { data, error, isFetching } = useFetchByIdQuery(recipeId as string);

  if (isFetching) {
    return <Skeleton />;
  } else if (error || !data) {
    return <ErrorView error={error} />;
  }

  const dateCreated = formatDateForDisplay(new Date(data.dateCreated));

  return (
    <>
      <ScreenHeader title={data.title} />
      <div className="p-lg">
        <ActionBar recipeId={recipeId as string} />
        <div className={`${s.card} mb-m p-m`}>
          <p className="mb-m">
            <span className={s.pTitle}>Author: </span>
            {data.authorId}
          </p>
          <p>
            <span className={s.pTitle}>Created: </span>
            {dateCreated}
          </p>
        </div>
        <div className="flex gap-m mb-m">
          {data.tags.map((tag, index) => (
            <div key={index} className={s.pillTag}>
              {tag}
            </div>
          ))}
        </div>
        <p className="mb-m">
          <span className={s.pTitle}>Instructions: </span>
        </p>
        <ol className={s.instructionList}>
          {data.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default RecipeDetailsScreen;
