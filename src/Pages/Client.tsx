import { useParams } from "react-router-dom";
import { clientsData, projectsData, invoicesData, activities } from "../Data";

interface Activity {
  text: string;
  date: string;
}

const Client = () => {
  const { id } = useParams();
  const projectId = parseInt(id || "0", 10); 

  const client = clientsData[projectId - 1];
  const project = projectsData[projectId - 1];
  const invoice = invoicesData[projectId - 1];
  const activity = activities[projectId - 1];

  if (!client || !project || !invoice || !activity) {
    return <div>CLIENT DATA NOT FOUND</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-12 xl:grid-cols-3 xl:gap-4">
        <div className="col-span-12 xl:col-span-2">
          <div className="flex gap-4 bg-[rgb(30,30,30)] p-2 rounded-[7.5px] mb-[25px]">
            <img
              className="sm:size-16 xl:size-24 2xl:size-32 rounded-[7.5px] object-cover hidden xl:block"
              src={client.image}
              alt=""
            />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 gap-x-10 2xl:gap-x-32">
              <div className="flex flex-col">
                <span className="text-[0.8rem] whitespace-nowrap">
                  CLIENT NAME
                </span>
                <span className="text-[0.8rem] whitespace-nowrap">
                  {client.name}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.8rem] whitespace-nowrap">EMAIL</span>
                <span className="text-[0.8rem] whitespace-nowrap">
                  {client.email}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.8rem] whitespace-nowrap">
                  PHONE NUMBER
                </span>
                <span className="text-[0.8rem] whitespace-nowrap">
                  {client.phone}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.8rem] whitespace-nowrap">STATUS</span>
                <span className="text-[0.8rem] whitespace-nowrap">
                  {client.status}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.8rem] whitespace-nowrap">REVENUE</span>
                <span className="text-[0.8rem] whitespace-nowrap">
                  {client.revenue}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.8rem] whitespace-nowrap">
                  OUTSTANDING
                </span>
                <span className="text-[0.8rem] whitespace-nowrap">
                  {client.outstanding}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 bg-blue-600 p-2 rounded-[7.5px] mb-[25px]">
            <img
              className="sm:size-16 xl:size-24 2xl:size-32 rounded-[7.5px] object-cover hidden xl:block"
              src="/public/element.svg"
              alt=""
            />
            <div className=" grid grid-cols-2 gap-4  md:grid-cols-3 xl:gap-x-10 2xl:gap-x-32">
              <div className="flex flex-col mr-[35px]">
                <span className="text-[0.8rem] whitespace-nowrap">
                  PROJECT NAME
                </span>
                <span className="text-[0.8rem] whitespace-nowrap">
                  {project.project}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.8rem] whitespace-nowrap">STARTED</span>
                <span className="text-[0.8rem] whitespace-nowrap">
                  {project.started}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.8rem] whitespace-nowrap">
                  DEADLINE
                </span>
                <span className="text-[0.8rem] whitespace-nowrap">
                  {project.deadline}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.8rem] whitespace-nowrap">STATUS</span>
                <span className="text-[0.8rem] whitespace-nowrap">
                  {project.status}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 bg-green-600 p-2 rounded-[7.5px] mb-[25px]">
            <img
              className="sm:size-16 xl:size-24 2xl:size-32 rounded-[7.5px] object-cover hidden xl:block"
              src="/public/log.svg"
              alt=""
            />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:gap-x-10 2xl:gap-x-32">
              <div className="flex flex-col mr-[45px]">
                <span className="text-[0.8rem] whitespace-nowrap">
                  INVOICE NUMBER
                </span>
                <span className="text-[0.8rem] whitespace-nowrap">
                  {invoice.number}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.8rem] whitespace-nowrap">
                  DUE DATE
                </span>
                <span className="text-[0.8rem] whitespace-nowrap">
                  {invoice.date}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.8rem] whitespace-nowrap">METHOD</span>
                <span className="text-[0.8rem] whitespace-nowrap">
                  {invoice.method}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.8rem] whitespace-nowrap">STATUS</span>
                <span className="text-[0.8rem] whitespace-nowrap">
                  {invoice.status}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.8rem] whitespace-nowrap">
                  AMOUNT DUE
                </span>
                <span className="text-[0.8rem] whitespace-nowrap">
                  {invoice.amount}
                </span>
              </div>
            </div>
          </div>

          <div>
            <textarea
              placeholder="ENTER NOTES"
              className="bg-transparent border-2 rounded-[7.5px] w-full h-[175px] p-[10px] focus:outline-0 overflow-hidden"
            ></textarea>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-1">
          <h2 className="mb-[25px]">RECENT CLIENT ACTIVITY</h2>
          {activity.map((act: Activity, index: number) => (
            <div
              key={index}
              className="p-[15px] bg-[rgb(30,30,30)] rounded-[7.5px] flex flex-col gap-[15px] mb-[15px]"
            >
              <span>{act.text}</span>
              <span>{act.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
