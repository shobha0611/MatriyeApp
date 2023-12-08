import { Box, Grid } from "@mui/material";
import CustomInput from "../../../component/CustomInput";
import CustomSelect from "../../../component/CustomSelect";
import { PF_CONTRIBUTION, PF_RATE } from "../../../constant";
import { useState } from "react";
import CustomReadOnlyInput from "../../../component/CustomReadOnlyInput";

interface InfoData {
  getInfoData(data: any): void;
}

export default function PRInfo({ getInfoData }: InfoData) {
  const [infoData, setInfoData] = useState<any>({});

  const handleInputChange = (value: String, key: any) => {
    let keydata = `${key}`;
    const newData = { ...infoData, [keydata]: value };
    setInfoData(newData);
    getInfoData({ prInfo: newData });
  };

  const employerTotalRate =
    Number(infoData?.employeradditionRate?.split("%")[0]) +
    Number(infoData?.employerpfRate?.split("%")[0]);

  const employeeTotalRate =
    Number(infoData?.employeeadditionRate?.split("%")[0]) +
    Number(infoData?.employeepfRate?.split("%")[0]);

  return (
    <Box mb={5}>
      <Grid container rowSpacing={2} columnSpacing={6}>
        <Grid item xs={1} sm={6} md={4}>
          <CustomSelect
            label="PF Contribution"
            options={PF_CONTRIBUTION}
            handleChange={(value: String) =>
              handleInputChange(value, "contribution")
            }
          />
        </Grid>
        <Grid item xs={1} sm={6} md={4}>
          <CustomInput
            label="PF Number"
            handleChange={(value: String) =>
              handleInputChange(value, "pfNumber")
            }
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={2} columnSpacing={6} mt={0.5}>
        <Grid item xs={1} sm={6} md={4}>
          <CustomSelect
            label="Employer PF Rate"
            options={PF_RATE}
            handleChange={(value: String) =>
              handleInputChange(value, "employerpfRate")
            }
          />
        </Grid>
        <Grid item xs={1} sm={6} md={4}>
          <CustomSelect
            label="Additional Rate"
            options={PF_RATE}
            handleChange={(value: String) =>
              handleInputChange(value, "employeradditionRate")
            }
          />
        </Grid>
        <Grid item xs={1} sm={6} md={4}>
          <CustomReadOnlyInput
            label="Total Rate (in %)"
            inputValue={`${employerTotalRate || 0}%`}
          />
        </Grid>
        <Grid item xs={1} sm={6} md={4}>
          <CustomSelect
            label="Employee PF Rate"
            options={PF_RATE}
            handleChange={(value: String) =>
              handleInputChange(value, "employeeadditionRate")
            }
          />
        </Grid>
        <Grid item xs={1} sm={6} md={4}>
          <CustomSelect
            label="Additional Rate"
            options={PF_RATE}
            handleChange={(value: String) =>
              handleInputChange(value, "employeepfRate")
            }
          />
        </Grid>
        <Grid item xs={1} sm={6} md={4}>
          <CustomReadOnlyInput
            label="Total Rate (in %)"
            inputValue={`${employeeTotalRate || 0}%`}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
