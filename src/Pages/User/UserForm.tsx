import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

import { createUser, getUserById, updateUser } from "../../appconfig";

import BasicInfo from "./component/BasicInfo";
import SalaryInfo from "./component/SalaryInfo";
import PRInfo from "./component/PRInfo";
import ESICInfo from "./component/ESICInfo";

interface UserFormProps {
  isEdit?: Boolean;
  isShow?: Boolean;
}

export default function UserForm({
  isEdit = false,
  isShow = false,
}: UserFormProps) {
  const navigate = useNavigate();
  const params: any = useParams();

  const [userData, setUserData] = useState({});
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [pageLoader, setLoader] = useState(false);

  const getInfoData = (data: any) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = async () => {
    let response: any;
    setLoading(true);
    if (!isEdit) {
      response = await createUser(userData).catch((err: any) => {
        toast.error(err?.response?.data?.error);
        setLoading(false);
      });
    } else {
      response = await updateUser(params.id, userData).catch((err: any) => {
        toast.error(err?.response?.data?.error);
        setLoading(false);
      });
    }
    if (response?.status === 201) {
      let toastMsg = isEdit
        ? "User updated susscessfully!!"
        : "User created susscessfully!!";
      toast.success(toastMsg, {
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

  useEffect(() => {
    if ((isEdit || isShow) && params.id) {
      setLoader(true);
      const getUserDetails = async () => {
        if (params) {
          const response = await getUserById(params.id).catch((err) => {
            setLoader(false);
            console.log(err);
          });
          if (response?.status === 200) {
            setLoader(false);
            setUser(response?.data?.result);
            setUserData(response?.data?.result);
          }
        }
      };
      getUserDetails();
    }
  }, [params]);

  if (pageLoader) {
    return (
      <Box
        className="page-container"
        p={6}
        textAlign="center"
        height="100vh"
        sx={{ color: "#fff" }}
      >
        Loading...{" "}
      </Box>
    );
  } else {
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
        <BasicInfo getInfoData={getInfoData} userDetails={user} />
        <Typography className="info-title" my={2}>
          Basic Salary Information
        </Typography>
        <SalaryInfo getInfoData={getInfoData} userDetails={user} />
        <Typography className="info-title" my={2}>
          PR Information
        </Typography>
        <PRInfo getInfoData={getInfoData} userDetails={user} />
        <Typography className="info-title" my={2}>
          ESIC Information
        </Typography>
        <ESICInfo getInfoData={getInfoData} userDetails={user} />
        {!isShow && (
          <Button
            onClick={handleSubmit}
            disabled={loading || Object.keys(userData).length === 0}
            className="btn-primary"
          >
            Submit
          </Button>
        )}
        <ToastContainer />
      </Box>
    );
  }
}
