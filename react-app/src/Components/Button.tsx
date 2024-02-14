interface props {
  children: string;
  colour?: string;
  onClickfunction: () => void;
}

export const Button = ({
  children,
  colour = "primary",
  onClickfunction,
}: props) => {
  return (
    <div className={"btn btn-" + colour} onClick={onClickfunction}>
      {children}
    </div>
  );
};
