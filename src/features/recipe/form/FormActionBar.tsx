import Button from "@/components/button/Button";

const FormActionBar = ({
  status,
  title,
  children,
}: {
  status: boolean;
  title: string;
  children?: React.ReactElement;
}) => {
  return (
    <div className="flex align-center justify-between" style={{ paddingTop: "var(--2xl)" }}>
      <Button.Submit title={title} status={status} />
      {children}
    </div>
  );
};

export default FormActionBar;
