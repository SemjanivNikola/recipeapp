import ScreenHeader from "@/components/screen-header/ScreenHeader";
import Skeleton from "@/components/skeleton/Skeleton";
import { useFetchByIdQuery } from "@/store/services/recipeApi";
import { useParams } from "react-router-dom";
import ErrorView from "../../error/ErrorView";
import ActionBar from "./ActionBar";
import AuthorDetails from "./AuthorDetails";
import s from "./recipe-details-screen.module.css";

const RecipeDetailsScreen = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const { data, error, isFetching } = useFetchByIdQuery(recipeId as string);

  if (isFetching) {
    return <Skeleton />;
  } else if (error || !data) {
    return <ErrorView error={error} />;
  }

  return (
    <div className="screen-wrapper list">
      <ScreenHeader title={data.title} />
      <div className="details-screen-p">
        <ActionBar recipeId={recipeId as string} />
        <AuthorDetails authorId={data.authorId} date={data.dateCreated} />
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
    </div>
  );
};

export default RecipeDetailsScreen;
