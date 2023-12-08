import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { createUser } from "../../appconfig";

import BasicInfo from "./component/BasicInfo";
import SalaryInfo from "./component/SalaryInfo";
import PRInfo from "./component/PRInfo";
import ESICInfo from "./component/ESICInfo";

export default function UserForm() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const getInfoData = (data: any) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response: any = await createUser(userData).catch((err: any) => {
      toast.error(err?.response?.data?.error);
      setLoading(false);
    });
    if (response?.status === 201) {
      toast.success('"User created susscessfully!!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
      navigate("/");
      setUserData([]);
    }
  };

  const goToUserList = () => {
    navigate("/");
  };

  return (
    <Box className="page-container" p={6}>
      <Box textAlign="right">
        <Button className="btn-underline" onClick={goToUserList}>
          User List
        </Button>
      </Box>
      <Typography className="info-title" my={2}>
        Basic Information
      </Typography>
      <BasicInfo getInfoData={getInfoData} />
      <Typography className="info-title" my={2}>
        Basic Salary Information
      </Typography>
      <SalaryInfo getInfoData={getInfoData} />
      <Typography className="info-title" my={2}>
        PR Information
      </Typography>
      <PRInfo getInfoData={getInfoData} />
      <Typography className="info-title" my={2}>
        ESIC Information
      </Typography>
      <ESICInfo getInfoData={getInfoData} />
      <Button
        onClick={handleSubmit}
        disabled={loading || Object.keys(userData).length === 0}
        className="btn-primary"
      >
        Submit
      </Button>
      <ToastContainer />
    </Box>
  );
}
