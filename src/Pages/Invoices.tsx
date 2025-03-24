import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import DataTable from "../Components/DataTable";
import { invoicesData } from "../Data";
import Add from "../Components/Add";

const columns: GridColDef[] = [
  {
    field: "number",
    type: "string",
    headerName: "NUMBER",
    width: 125,
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
    field: "project",
    type: "string",
    headerName: "PROJECT",
    width: 300,
    disableColumnMenu: true,
  },
  {
    field: "amount",
    headerName: "AMOUNT DUE",
    width: 175,
    type: "string",
    disableColumnMenu: true,
  },
  {
    field: "date",
    headerName: "DUE DATE",
    width: 150,
    type: "string",
    disableColumnMenu: true,
  },
  {
    field: "method",
    type: "string",
    headerName: "METHOD",
    width: 215,
    disableColumnMenu: true,
  },
  {
    field: "status",
    type: "string",
    headerName: "STATUS",
    width: 300,
    disableColumnMenu: true,
  },
];

const Invoices = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-[25px]">
        <h1>INVOICES</h1>
        <button
          className="bg-[rgb(30,30,30)] p-[7.5px] rounded-[7.5px] line-clamp-1"
          onClick={() => setOpen(true)}
        >
          ADD NEW INVOICE
        </button>
      </div>
      <DataTable
        slug="INVOICES"
        columns={columns}
        rows={invoicesData}
        hideActionColumn={true} 
      />
      {open && <Add slug="INVOICE" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Invoices;
