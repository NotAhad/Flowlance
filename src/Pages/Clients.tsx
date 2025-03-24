import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import DataTable from "../Components/DataTable";
import { clientsData } from "../Data";
import Add from "../Components/Add";

const columns: GridColDef[] = [
  {
    field: "name",
    type: "string",
    headerName: "NAME",
    width: 300,
    disableColumnMenu: true,
  },
  {
    field: "email",
    type: "string",
    headerName: "EMAIL",
    width: 300,
    disableColumnMenu: true,
  },
  {
    field: "phone",
    type: "string",
    headerName: "PHONE",
    width: 200,
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
    field: "revenue",
    headerName: "REVENUE",
    width: 125,
    type: "string",
    disableColumnMenu: true,
  },
  {
    field: "outstanding",
    headerName: "OUTSTANDING",
    width: 175,
    type: "string",
    disableColumnMenu: true,
  },
  {
    field: "created",
    headerName: "CREATED",
    width: 150,
    type: "string",
    disableColumnMenu: true,
  },
];

const Clients = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-[25px]">
        <h1>CLIENTS</h1>
        <button
          className="bg-[rgb(30,30,30)] p-[7.5px] rounded-[7.5px] line-clamp-1"
          onClick={() => setOpen(true)}
        >
          ADD NEW CLIENT
        </button>
      </div>
      <DataTable slug="CLIENTS" columns={columns} rows={clientsData} />
      {open && <Add slug="CLIENT" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Clients;
