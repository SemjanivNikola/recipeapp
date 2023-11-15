import ScreenHeader from "@/components/screen-header/ScreenHeader";
import s from "../create-edit/create-edit.module.css";

const CreateEditLayout = ({ title, children }: { title: string; children: React.ReactElement }) => {
  return (
    <div style={{ height: "100%", backgroundColor: "#ccc" }}>
      <ScreenHeader title={title} />
      <div className={s.content}>{children}</div>
    </div>
  );
};

export default CreateEditLayout;
