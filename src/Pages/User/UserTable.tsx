import AddIcon from "@mui/icons-material/Add";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { getAllUsersList, deleteUser } from "../../appconfig";

import CustomDataGrid from "../../component/CustomDataGrid";
import MoreDetailsTooltip from "./component/MoreDetailsTooltip";

const columns: GridColDef[] = [
  {
    field: "_id",
    headerName: "Sr.No",
    sortable: false,
  },
  {
    field: "fullName",
    headerName: "Full Name",
    sortable: false,
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email Id",
    sortable: false,
    flex: 1,
  },
  {
    field: "phoneNo",
    headerName: "Mobile No",
    sortable: false,
    flex: 1,
  },
  {
    field: "city",
    headerName: "City",
    sortable: false,
    flex: 1,
  },
  {
    field: "crmUser",
    headerName: "CRM User",
    sortable: false,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    sortable: false,
  },
  {
    field: "",
    headerName: "Action",
    sortable: false,
    renderCell: (params: any) => {
      return (
        <Box sx={{ margin: "auto" }}>
          <MoreDetailsTooltip userId={params.id} />
        </Box>
      );
    },
  },
];

export default function UserTable() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<any>([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleNavigation = () => {
    navigate("/adduser");
  };

  const handleDeleteRecords = () => {
    selectedRows?.map(async (ids, idx) => {
      const response = await deleteUser(ids).catch((err) => {
        toast.error("User deletetion failed");
      });

      if (response?.status === 200) {
        toast.success(`User ${response?.data?.user} successfully deleted`);
        fetchMyAPI();
      }
    });
  };

  const fetchMyAPI = async () => {
    let response = await getAllUsersList().catch((err) => {
      toast.error(err?.response?.data?.msg);
    });
    if (response?.status === 200) {
      const data = response?.data?.results?.map((user: any, idx: number) => ({
        id: user?._id,
        _id: idx + 1,
        fullName: user?.fullName,
        email: user?.email,
        phoneNo: user?.phoneNumber,
        city: user?.city,
        crmUser: user?.crmUser,
        status: idx % 2 === 0 ? "Active" : "Inactive",
      }));
      setUserData(data);
    }
  };
  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <Box className="page-container" sx={{ height: "100%", width: "100%" }}>
      <Box p={4}>
        <Box textAlign="right" display="flex" justifyContent="flex-end">
          <AddIcon sx={{ color: "#fff", mt: 0.6, ml: 2 }} />
          <Button className="btn-underline" onClick={handleNavigation}>
            Add User
          </Button>
        </Box>
        <CustomDataGrid
          rows={userData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          getRowClassName={(params: any) =>
            `super-app-theme--${params.row.status}`
          }
          className="page-container"
          sx={{
            height: "70vh",
          }}
          onRowSelectionModelChange={(ids: any) => {
            setSelectedRows(ids);
          }}
        />
        {selectedRows.length > 0 && (
          <Button className="btn-underline" onClick={handleDeleteRecords}>
            Delete Selected Records
          </Button>
        )}
      </Box>
      <ToastContainer />
    </Box>
  );
}
