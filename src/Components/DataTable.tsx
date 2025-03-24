import {DataGrid, GridColDef, GridToolbar} from "@mui/x-data-grid";
import { Link } from "react-router-dom";

type Props = {
    columns: GridColDef[];
    rows: object[];
    slug: string;
    hideActionColumn?: boolean; 
};

const DataTable = (props: Props) => {
    const actionColumn: GridColDef = {
        field: "action",
        headerName: "VIEW",
        width: 100,
        renderCell: (params) => {
            return (
                <div className="flex items-center justify-center h-full">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <img className="cursor-pointer" src="/action.svg" alt="" />
                    </Link>
                </div>
            );
        },
    };

    const columns = props.hideActionColumn
        ? props.columns
        : [...props.columns, actionColumn];

    return (
        <div>
            <DataGrid
                className="p-[25px]"
                rows={props.rows}
                columns={columns}
                initialState={{
                    pagination: { paginationModel: { pageSize: 10 } },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
                sx={{
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: 'rgb(20, 20, 20)',
                    },
                    '& .MuiInputBase-root': {
                        color: 'white',
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: 'white',
                    },
                    '& .MuiInput-underline:before': {
                        borderBottom: '2px solid #312E81',
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                        borderBottom: '2px solid #312E81',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottom: '2px solid #312E81',
                    },
                }}
            />
        </div>
    );
};

export default DataTable;
