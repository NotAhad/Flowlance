import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const data = {
  color: "#312E81",
  title: "EARNINGS THIS MONTH",
  number: "£11,238.00",
  dataKey: "AMOUNT",
  percentage: 12,
  chartData: [
    { name: "1", AMOUNT: 689 },
    { name: "2", AMOUNT: 473 },
    { name: "3", AMOUNT: 502 },
    { name: "4", AMOUNT: 394 },
    { name: "5", AMOUNT: 846 },
    { name: "6", AMOUNT: 291 },
    { name: "7", AMOUNT: 715 },
    { name: "8", AMOUNT: 679 },
    { name: "9", AMOUNT: 348 },
    { name: "10", AMOUNT: 821 },
    { name: "11", AMOUNT: 473 },
    { name: "12", AMOUNT: 662 },
    { name: "13", AMOUNT: 585 },
    { name: "14", AMOUNT: 795 },
    { name: "15", AMOUNT: 328 },
    { name: "16", AMOUNT: 910 },
    { name: "17", AMOUNT: 723 },
    { name: "18", AMOUNT: 458 },
    { name: "19", AMOUNT: 617 },
    { name: "20", AMOUNT: 372 },
    { name: "21", AMOUNT: 801 },
    { name: "22", AMOUNT: 499 },
    { name: "23", AMOUNT: 676 },
    { name: "24", AMOUNT: 934 },
    { name: "25", AMOUNT: 412 },
    { name: "26", AMOUNT: 543 },
    { name: "27", AMOUNT: 389 },
    { name: "28", AMOUNT: 764 },
    { name: "29", AMOUNT: 638 },
    { name: "30", AMOUNT: 721 },
  ],
};

const BoxEarnings = () => {
  return (
    <div className="h-full flex flex-col items-center">
      <span>{data.title}</span>

      <div className="flex flex-col items-center justify-center h-full relative">
        <h1 className="absolute top-1/2 transform -translate-y-1/2 text-[12vw] lg:text-[6.5vw] xl:text-[4.5vw] text-[rgb(30,30,30)]">
          {data.number}
        </h1>

        <div className="h-[150px] mt-[35px] lg:w-[500px]">
          <ResponsiveContainer>
            <LineChart data={data.chartData}>
              <Tooltip
                formatter={(value) => `£${value}`}
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 165, y: 135 }}
              />
              <Line
                type="monotone"
                dataKey={data.dataKey}
                stroke={data.color}
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex justify-between w-full">
        <Link to="/invoices" className="self-end" style={{ color: data.color }}>
          VIEW INVOICES
        </Link>
        <div className="flex flex-col items-end">
          <span style={{ color: data.percentage < 0 ? "tomato" : "limegreen" }}>
            {data.percentage < 0 ? "-" : "+"}
            {Math.abs(data.percentage)}%
          </span>
          <span className="">THIS MONTH</span>
        </div>
      </div>
    </div>
  );
};

export default BoxEarnings;
