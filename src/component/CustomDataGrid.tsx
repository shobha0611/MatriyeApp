import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material";

const CustomDataGrid = styled(DataGrid)(() => ({
  "& .super-app-theme--active": {
    backgroundColor: "#1b2163",
    "&:hover": {
      backgroundColor: "#1b2163",
    },
    "&.Mui-selected": {
      backgroundColor: "#1b2163",
      "&:hover": {
        backgroundColor: "#1b2163",
      },
    },
  },
  "& .MuiDataGrid-root .MuiDataGrid-columnHeader": {
    backgroundColor: "transparent",
  },
  "& .MuiDataGrid-withBorderColor": {
    borderColor: "transparent",
    color: "#fff",
  },
  "&  .MuiTablePagination-toolbar": {
    color: "#fff",
  },
  "& .MuiSelect-icon": {
    color: "#fff",
  },
  "& .MuiDataGrid-overlay": {
    background: "rgb(35 19 153 / 86%)",
  },
}));

export default CustomDataGrid;
