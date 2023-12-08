import { Box, Grid } from "@mui/material";
import CustomInput from "../../../component/CustomInput";
import CustomSelect from "../../../component/CustomSelect";
import { useState } from "react";
import { SALARY_BASIS, PAYMENT_TYPE } from "../../../constant";

interface InfoData {
  userDetails: any;
  getInfoData(data: any): void;
}

export default function SalaryInfo({ getInfoData, userDetails }: InfoData) {
  const [infoData, setInfoData] = useState({...userDetails?.salaryInfo} || {});

  const handleInputChange = (value: String, key: any) => {
    let keydata = `${key}`;
    const newData = { ...infoData, [keydata]: value };
    setInfoData(newData);
    getInfoData({ salaryInfo: newData });
  };

  return (
    <Box mb={5}>
      <Grid container rowSpacing={2} columnSpacing={6}>
        <Grid item xs={1} sm={6} md={4}>
          <CustomSelect
            label="Salary Basis"
            defaultValue={userDetails?.salaryInfo?.basis}
            options={SALARY_BASIS}
            handleChange={(value: String) => handleInputChange(value, "basis")}
          />
        </Grid>
        <Grid item xs={1} sm={6} md={4}>
          <CustomInput
            label="Salary Amount (per month)"
            defaultValue={userDetails?.salaryInfo?.amt}
            handleChange={(value: String) => handleInputChange(value, "amt")}
          />
        </Grid>
        <Grid item xs={1} sm={6} md={4}>
          <CustomSelect
            label="Payment Type"
            defaultValue={userDetails?.salaryInfo?.paymentType}
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
