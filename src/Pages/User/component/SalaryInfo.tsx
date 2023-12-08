import { Box, Typography, Grid } from "@mui/material";
import CustomInput from "../../../component/CustomInput";
import CustomSelect from "../../../component/CustomSelect";
import { useState } from "react";
import { SALARY_BASIS, PAYMENT_TYPE } from "../../../constant";

interface InfoData {
  getInfoData(data: any): void;
}

export default function SalaryInfo({ getInfoData }: InfoData) {
  const [infoData, setInfoData] = useState({});

  const handleInputChange = (value: String, key: any) => {
    let keydata = `${key}`;
    const newData = { ...infoData, [keydata]: value };
    setInfoData(newData);
    getInfoData({ salaryInfo: newData });
  };

  return (
    <Box mt={4}>
      <Typography className="info-title">Basic Salary Information</Typography>
      <Grid container rowSpacing={2} columnSpacing={6}>
        <Grid item xs={1} sm={6} md={4}>
          <CustomSelect
            label="Salary Basis"
            options={SALARY_BASIS}
            handleChange={(value: String) => handleInputChange(value, "basis")}
          />
        </Grid>
        <Grid item xs={1} sm={6} md={4}>
          <CustomInput
            label="Salary Amount (per month)"
            handleChange={(value: String) => handleInputChange(value, "amt")}
          />
        </Grid>
        <Grid item xs={1} sm={6} md={4}>
          <CustomSelect
            label="Payment Type"
            options={PAYMENT_TYPE}
            handleChange={(value: String) =>
              handleInputChange(value, "paymentType")
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}