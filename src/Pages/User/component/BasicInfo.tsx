import { Box, Typography, Grid } from "@mui/material";
import CustomInput from "../../../component/CustomInput";
import CustomSelect from "../../../component/CustomSelect";
import {
  DEPT_OPTIONS,
  CRM_USER,
  ROLE,
  ASSIGN_CALLER_Id,
  COUNTRY,
  STATE,
  CITY,
} from "../../../constant";
import { useState } from "react";

interface InfoData {
  getInfoData(data: any): void;
}

export default function BasicInfo({ getInfoData }: InfoData) {
  const [infoData, setInfoData] = useState({});
  const handleInputChange = (value: String, key: any) => {
    let keydata = `${key}`;
    const newData = { ...infoData, [keydata]: value };
    setInfoData(newData);
    getInfoData(newData);
  };

  return (
    <Box>
      <Typography className="info-title">Basic Information</Typography>
      <Box>Profile</Box>
      <Grid container rowSpacing={2} columnSpacing={6}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomInput
            label="Full Name"
            handleChange={(value: String) =>
              handleInputChange(value, "fullName")
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomInput
            label="Mobile Number"
            handleChange={(value: String) =>
              handleInputChange(value, "phoneNumber")
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomInput
            label="Email Id"
            handleChange={(value: String) => handleInputChange(value, "email")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomInput
            label="Date of Birth"
            handleChange={(value: String) => handleInputChange(value, "dob")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomInput
            label="Position"
            handleChange={(value: String) =>
              handleInputChange(value, "position")
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomSelect
            label="Department"
            options={DEPT_OPTIONS}
            handleChange={(value: String) =>
              handleInputChange(value, "department")
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomSelect
            label="CRM User"
            options={CRM_USER}
            handleChange={(value: String) =>
              handleInputChange(value, "crmUser")
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomSelect
            label="Role"
            options={ROLE}
            handleChange={(value: String) => handleInputChange(value, "role")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomSelect
            label="Assign Caller Id"
            options={ASSIGN_CALLER_Id}
            handleChange={(value: String) =>
              handleInputChange(value, "assignCallerId")
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomSelect
            label="Country"
            options={COUNTRY}
            handleChange={(value: String) =>
              handleInputChange(value, "country")
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomSelect
            label="State"
            options={STATE}
            handleChange={(value: String) => handleInputChange(value, "state")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomSelect
            label="City"
            options={CITY}
            handleChange={(value: String) => handleInputChange(value, "city")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <CustomInput
            label="Address"
            handleChange={(value: String) =>
              handleInputChange(value, "address")
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}
