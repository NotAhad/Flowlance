import { GridColDef } from "@mui/x-data-grid";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.setOpen(false);
  };

  return (
    <div className="z-50 w-full min-h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.725)] flex items-center justify-center p-4">
      <div className="relative p-[50px] rounded-[7.5px] bg-[rgb(20,20,20)] max-h-[80vh] overflow-y-auto scrollbar-hide">
        <span
          className="absolute top-[15px] right-[20px] cursor-pointer"
          onClick={() => props.setOpen(false)}
        >
          X
        </span>
        <h1 className="mb-[40px] flex justify-center">ADD NEW {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-[20px]">
            {props.columns
              .filter((item) => item.field !== "id" && item.field !== "img")
              .map((column) => (
                <div className="flex flex-col gap-[10px] mb-[20px]">
                  <label className="line-clamp-1">{column.headerName}</label>
                  <input
                    className="p-[10px] bg-transparent outline-none border-2 rounded-[7.5px] text-transform: uppercase"
                    type={column.type}
                    placeholder={column.field}
                  />
                </div>
              ))}
          </div>
          <div className="flex flex-col col-span-4">
            <button className="p-[10px] cursor-pointer bg-[rgb(30,30,30)] rounded-[7.5px]">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
