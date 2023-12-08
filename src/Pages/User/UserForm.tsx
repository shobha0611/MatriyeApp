import { Box, Button } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createUser } from "../../appconfig";

import BasicInfo from "./component/BasicInfo";
import SalaryInfo from "./component/SalaryInfo";
import PRInfo from "./component/PRInfo";
import ESICInfo from "./component/ESICInfo";

export default function UserForm() {
  const [userData, setUserData] = useState({});

  const getInfoData = (data: any) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = async () => {
    console.log("click");
    const response: any = await createUser(userData).catch((err: any) =>
      toast.error("User creation failed")
    );
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
    }
  };

  return (
    <Box className="page-container" p={6}>
      <BasicInfo getInfoData={getInfoData} />
      <SalaryInfo getInfoData={getInfoData} />
      <PRInfo getInfoData={getInfoData} />
      <ESICInfo getInfoData={getInfoData} />
      <Button
        onClick={handleSubmit}
        sx={{
          color: "#fff",
          backgroundImage: "linear-gradient(to left,  #104cd7,  #6dbbb0)",
          padding: "0.5em 2em",
          mt: 5,
          borderRadius: 1,
        }}
      >
        Submit
      </Button>
      <ToastContainer />
    </Box>
  );
}
