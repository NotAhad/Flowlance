import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "PORTFOLIO", value: 8.5, color: "#2563eb" },
  { name: "LANDING PAGE", value: 26, color: "#16a34a" },
  { name: "TASK MANAGER", value: 12, color: "#f97316" },
  { name: "CRYPTO TRACKER", value: 18.5, color: "#db2777" },
  { name: "ADMIN DASHBOARD", value: 21, color: "#dc2626" },
  { name: "CHAT APP", value: 7, color: "#facc15" },
];

const formattedData = data.map((item) => ({
  ...item,
  valueLabel: `${item.value} HOURS`,
}));

const BoxPieChart = () => {
  return (
    <div className="h-full flex flex-col items-center w-full">
      <h1>MONTHLY TIME DISTRIBUTION</h1>

      <div className="flex items-center justify-center h-full w-full min-h-96">
        <h1 className="absolute text-[90px] text-[rgb(30,30,30)]">71</h1>
        <ResponsiveContainer width="100%" height="60%">
          <PieChart>
            <Tooltip
              formatter={(value) => `${value} HOURS`}
              contentStyle={{
                background: "rgb(40,40,40)",
                borderRadius: "7.5px",
                borderWidth: "2px",
              }}
            />
            <Pie
              data={data}
              innerRadius={"80%"}
              outerRadius={"100%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[25px]">
        {formattedData.map((item) => (
          <div className="flex gap-[10px] items-center" key={item.name}>
            <div className="flex items-center gap-4">
              <div
                className="w-[10px] h-[10px] rounded-[35%]"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-nowrap text-sm">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxPieChart;
