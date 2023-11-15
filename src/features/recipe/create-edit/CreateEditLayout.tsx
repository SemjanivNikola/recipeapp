import ScreenHeader from "@/components/screen-header/ScreenHeader";

const CreateEditLayout = ({ title, children }: { title: string; children: React.ReactElement }) => {
  return (
    <div style={{ height: "100%", backgroundColor: "var(--gray-tone)", overflowY: "scroll" }}>
      <ScreenHeader.Form title={title} />
      <div className="p-lg">{children}</div>
    </div>
  );
};

export default CreateEditLayout;
