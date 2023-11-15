import s from "./screen-header.module.css";

const ScreenHeader = ({ title }: { title: string }) => {
  return (
    <div className={s.header}>
      <h1>{title}</h1>
    </div>
  );
};

const FormScreenHeader = ({ title }: { title: string }) => (
  <div className={s.formHeader}>
    <h1>{title}</h1>
  </div>
);

ScreenHeader.Form = FormScreenHeader;

export default ScreenHeader;
