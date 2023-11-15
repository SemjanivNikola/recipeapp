import s from "./skeleton.module.css";

const Skeleton = () => {
  return (
    <div className={s.skeletonTable}>
      <div className={s.skeletonTableHeader} />
      <div className={s.empty} />
      <div className={s.skeletonTableRow} />
      <div className={s.empty} />
      <div className={s.skeletonTableRow} />
      <div className={s.empty} />
      <div className={s.skeletonTableRow} />
      <div className={s.empty} />
    </div>
  );
};

export default Skeleton;
