import s from "./skeleton.module.css";

const SkeletonScreenHeader = () => (
  <div className={s.skeletonScreenHeader}>
    <div className={s.skeletonFullContent} />
  </div>
);

const Skeleton = () => (
  <div className={s.skeletonScreen}>
    <SkeletonScreenHeader />
    <div className={s.rowJustifyEnd}>
      <div className={s.skeletonBtn} />
      <div className={s.skeletonBtn} />
    </div>
    <SkeletonScreenHeader />
    <div className={s.content}>
      <div className={s.row}>
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
    <div className={s.content}>
      <div className={s.skeletonForm}>
        <div className={s.row}>
          <div className={s.w30}>
            <div className={`${s.skeletonContent} ${s.mb1}`} />
            <div className={`${s.skeletonContent} ${s.mb1}`} />
          </div>
          <div className={s.w70}>
            <div className={`${s.skeletonContent} ${s.mb1}`} />
            <div className={`${s.skeletonContent} ${s.mb1}`} />
            <div className={`${s.skeletonContent} ${s.mb1}`} />
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
