import BoxPieChart from "../Components/BoxPieChart";
import BoxCS from "../Components/BoxCS";
import BoxListCA from "../Components/BoxListCA";
import BoxListUD from "../Components/BoxListUD";
import BoxEarnings from "../Components/BoxEarnings";
import BoxOverview from "../Components/BoxOverview";

const Home = () => {
  return (
    <div className="grid gap-[20px] auto-rows-[minmax(180px,_auto)] mb-[25px]">
      {/* Always 3 columns for the first three boxes */}
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-[20px]">
        <div className="p-[20px] rounded-[7.5px] border-[2px] bg-blue-600">
          <BoxOverview amount={"6"} title="AMOUNT" />
        </div>
        <div className="p-[20px] rounded-[7.5px] border-[2px] bg-green-600">
          <BoxOverview amount={"5"} title="COMPLETED" />
        </div>
        <div className="p-[20px] rounded-[7.5px] border-[2px] bg-orange-500">
          <BoxOverview amount={"2"} title="UPCOMING" />
        </div>
      </div>

      {/* Responsive grid for the rest */}
      <div className="grid grid-cols-1  xl:grid-cols-2 2xl:grid-cols-3 gap-[20px]">
        <div className="p-[20px] rounded-[7.5px] border-[2px] row-span-2">
          <BoxEarnings />
        </div>
        <div className="p-[20px] rounded-[7.5px] border-[2px] row-span-2">
          <BoxCS />
        </div>
        <div className="p-[20px] rounded-[7.5px] border-[2px] row-span-4">
          <BoxPieChart />
        </div>
        <div className="p-[20px] rounded-[7.5px] border-[2px] row-span-2">
          <BoxListCA />
        </div>
        <div className="p-[20px] rounded-[7.5px] border-[2px] row-span-2">
          <BoxListUD />
        </div>
      </div>
    </div>
  );
};

export default Home;
