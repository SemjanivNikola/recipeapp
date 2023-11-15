import s from "./skeleton.module.css";

const SkeletonScreenHeader = () => (
  <div className={s.skeletonScreenHeader}>
    <div className={s.skeletonFullContent} />
  </div>
);

const Skeleton = () => (
  <div className={s.skeletonScreen}>
    <SkeletonScreenHeader />
    <div className="flex align-center justify-end gap-m p-m">
      <div className={s.skeletonBtn} />
      <div className={s.skeletonBtn} />
    </div>
    <SkeletonScreenHeader />
    <div className="p-lg">
      <div className="flex gap-m">
        <div className={s.skeletonBtn} />
        <div className={s.skeletonBtn} />
        <div className={s.skeletonBtn} />
      </div>
    </div>
    <SkeletonScreenHeader />
  </div>
);

const CreateEditSkeleton = () => (
  <div className={s.skeletonScreen}>
    <SkeletonScreenHeader />
    <div className="p-lg">
      <div className={s.skeletonForm}>
        <div className="flex gap-m">
          <div className={s.w30}>
            <div className={`${s.skeletonContent} mb-m`} />
            <div className={`${s.skeletonContent} mb-m`} />
          </div>
          <div className={s.w70}>
            <div className={`${s.skeletonContent} mb-m`} />
            <div className={`${s.skeletonContent} mb-m`} />
            <div className={`${s.skeletonContent} mb-m`} />
          </div>
        </div>
        <div className={s.skeletonActionRow}>
          <div className={s.skeletonBtn} />
          <div className={s.skeletonBtn} />
        </div>
      </div>
    </div>
  </div>
);

const ListSkeleton = () => (
  <div className={s.skeletonTable}>
    <div className={s.skeletonTableHeader} />
    <div className={s.skeletonTableRow}>
      <div className={s.skeletonContent} />
    </div>
    <div className={s.skeletonTableRow}>
      <div className={s.skeletonContent} />
    </div>
    <div className={s.skeletonTableRow}>
      <div className={s.skeletonContent} />
    </div>
    <div className={s.skeletonTableRow}>
      <div className={s.skeletonContent} />
    </div>
  </div>
);

Skeleton.List = ListSkeleton;
Skeleton.CreateEdit = CreateEditSkeleton;

export default Skeleton;
