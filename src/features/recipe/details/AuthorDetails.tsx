import Spinner from "@/components/spinner/Spinner";
import { useUserDetailsQuery } from "@/store/services/userApi";
import { formatDateForDisplay } from "../helpers/dateHelper";
import s from "./recipe-details-screen.module.css";

const AuthorDetails = ({ authorId, date }: { authorId: string; date: string }) => {
  const { data, error, isFetching } = useUserDetailsQuery(authorId);
  const dateCreated = formatDateForDisplay(new Date(date));

  if (isFetching) {
    return (
      <div className={`${s.card} mb-m p-m`}>
        <Spinner />
      </div>
    );
  } else if (error)
    return (
      <div className={`${s.card} mb-m p-m`}>
        <p className="mb-m">
          <span className={s.pTitle}>Author: </span>-
        </p>
        <p>
          <span className={s.pTitle}>Created: </span>
          {dateCreated}
        </p>
      </div>
    );

  return (
    <div className={`${s.card} mb-m p-m`}>
      <p className="mb-m">
        <span className={s.pTitle}>Author: </span>
        {data?.name}
      </p>
      <p>
        <span className={s.pTitle}>Created: </span>
        {dateCreated}
      </p>
    </div>
  );
};

export default AuthorDetails;
