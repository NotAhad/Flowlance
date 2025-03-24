import { Link } from "react-router-dom";

const data = [
  { task: "LOG IN PAGE", date: "08.01.25", color: "#db2777" },
  { task: "CREATE DATA FOR USER", date: "10.01.25", color: "#dc2626" },
  { task: "DESIGN PROJECTS PAGE", date: "11.01.25", color: "#2563eb" },
];

const BoxListUD = () => {
  return (
    <div className="h-full flex flex-col items-center">
      <span>UPCOMING DEADLINES</span>

      <div className="mt-2 flex flex-col items-center justify-center h-full relative gap-[25px] w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between p-[10px] w-full h-[50px] rounded-[7.5px]"
            style={{ backgroundColor: item.color }}
          >
            <span className="line-clamp-1">{item.task}</span>
            <span>{item.date}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between w-full mt-4">
        <Link to="/projects" className="text-indigo-900">
          VIEW PROJECTS
        </Link>
      </div>
    </div>
  );
};

export default BoxListUD;
