import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const data = {
  color: "#312E81",
  title: "OVERALL CLIENT SATISFACTION",
  dataKey: "amount",
  chartData: [
    { name: "0", amount: 0 },
    { name: "1", amount: 0 },
    { name: "2", amount: 0 },
    { name: "3", amount: 4 },
    { name: "4", amount: 11 },
    { name: "5", amount: 18 },
  ],
};

const BoxCS = () => {
  return (
    <div className="h-full flex flex-col items-center text-center">
      <span>{data.title}</span>

      <div className="flex flex-col items-center justify-center h-full relative">
        <div className="lg:w-[500px] h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="80%"
              data={data.chartData}
            >
              <PolarGrid stroke="#312E81" />
              <PolarAngleAxis
                dataKey="name"
                stroke="#312E81"
                textAnchor="middle"
                tick={{ fill: "#ffffff" }}
              />
              <PolarRadiusAxis stroke="#ffffff" />
              <Radar
                fill={data.color}
                fillOpacity={0.6}
                dataKey={data.dataKey}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BoxCS;
