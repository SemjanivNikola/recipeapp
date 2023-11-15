import s from "./skeleton.module.css";

const Skeleton = () => {
  return (
    <div className={s.skeletonTable}>
      <div className={s.skeletonTableHeader} />
      <div className={s.skeletonTableBody}>
        <div className={s.empty} />
        <div className={s.skeletonTableRow} />
        <div className={s.empty} />
        <div className={s.skeletonTableRow} />
        <div className={s.empty} />
        <div className={s.skeletonTableRow} />
        <div className={s.empty} />
      </div>
    </div>
  );
};

export default Skeleton;
