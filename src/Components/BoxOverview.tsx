type Props = {
  amount: string;
  title: string;
};

const BoxOverview = ({ amount, title }: Props) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl flex items-center">{amount}</h1>
        <p className="text-sm">{title}</p>{" "}
      </div>
    </div>
  );
};

export default BoxOverview;
