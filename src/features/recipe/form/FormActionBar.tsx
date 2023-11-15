import ButtonLoader from "@/components/button/ButtonLoader";

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
      <ButtonLoader.Submit title={title} status={status} />
      {children}
    </div>
  );
};

export default FormActionBar;
