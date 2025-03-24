import { Link } from "react-router-dom";

const data = [
  { name: "JARED", activity: "MEETING", date: "04.01.25" },
  { name: "EMMA", activity: "INOVINCE SENT", date: "03.01.25" },
  { name: "STEVE", activity: "EMAIL RECIEVED", date: "01.01.25" },
];

const BoxListCA = () => {
  return (
    <div className="h-full flex flex-col items-center">
      <span>CLIENT ACTIVITY</span>

      <div className="flex flex-col items-center justify-center h-full gap-3 w-full">
        {data.map((item) => (
          <div className="flex justify-between p-[10px] bg-[rgb(30,30,30)] w-full h-[50px] rounded-lg md:gap-12 text-center ">
            <span>{item.name}</span>
            <span className="line-clamp-1">{item.activity}</span>
            <span>{item.date}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full">
        <Link to="/clients" className="text-indigo-900">
          VIEW CLIENTS
        </Link>
      </div>
    </div>
  );
};

export default BoxListCA;
