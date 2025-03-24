import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import DataTable from "../Components/DataTable";
import { projectsData } from "../Data";
import Add from "../Components/Add";

const columns: GridColDef[] = [
  {
    field: "project",
    type: "string",
    headerName: "PROJECT",
    width: 300,
    disableColumnMenu: true,
  },
  {
    field: "status",
    type: "string",
    headerName: "STATUS",
    width: 200,
    disableColumnMenu: true,
  },
  {
    field: "client",
    type: "string",
    headerName: "CLIENT",
    width: 300,
    disableColumnMenu: true,
  },
  {
    field: "priority",
    headerName: "PRIORITY",
    width: 150,
    type: "string",
    disableColumnMenu: true,
  },
  {
    field: "budget",
    headerName: "BUDGET",
    width: 150,
    type: "string",
    disableColumnMenu: true,
  },
  {
    field: "tasks",
    headerName: "TASKS",
    width: 100,
    type: "string",
    disableColumnMenu: true,
  },
  {
    field: "started",
    headerName: "STARTED",
    width: 125,
    type: "string",
    disableColumnMenu: true,
  },
  {
    field: "deadline",
    headerName: "DEADLINE",
    width: 125,
    type: "string",
    disableColumnMenu: true,
  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-[25px]">
        <h1>PROJECTS</h1>
        <button
          className="bg-[rgb(30,30,30)] p-[7.5px] rounded-[7.5px] line-clamp-1"
          onClick={() => setOpen(true)}
        >
          ADD NEW PROJECT
        </button>
      </div>
      <div>
        <DataTable slug="PROJECTS" columns={columns} rows={projectsData} />
      </div>
      {open && <Add slug="PROJECT" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Projects;
