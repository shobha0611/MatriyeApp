import { Box, Grid } from "@mui/material";
import CustomInput from "../../../component/CustomInput";
import CustomSelect from "../../../component/CustomSelect";
import { ESIC_CONTRIBUTION, ESIC_RATE } from "../../../constant";
import { useState } from "react";
import CustomReadOnlyInput from "../../../component/CustomReadOnlyInput";

interface InfoData {
  userDetails: any;
  getInfoData(data: any): void;
}

export default function ESICInfo({ getInfoData, userDetails }: InfoData) {
  const [infoData, setInfoData] = useState<any>(
    { ...userDetails?.esicInfo } || {}
  );

  const handleInputChange = (value: String, key: any) => {
    let keydata = `${key}`;
    const newData = { ...infoData, [keydata]: value };
    setInfoData(newData);
    getInfoData({ esicInfo: newData });
  };

  const totalRate =
    Number(userDetails?.esicInfo?.esicrate?.split("%")[0]) +
    Number(userDetails?.esicInfo?.additionalRate?.split("%")[0]);

  return (
    <Box mb={5}>
      <Grid container rowSpacing={2} columnSpacing={6}>
        <Grid item xs={1} sm={6} md={4}>
          <CustomSelect
            label="ESIC Contribution"
            defaultValue={userDetails?.esicInfo?.esicContribution}
            options={ESIC_CONTRIBUTION}
            handleChange={(value: String) =>
              handleInputChange(value, "esicContribution")
            }
          />
        </Grid>
        <Grid item xs={1} sm={6} md={4}>
          <CustomInput
            label="ESIC No."
            defaultValue={userDetails?.esicInfo?.esicNo}
            handleChange={(value: String) => handleInputChange(value, "esicNo")}
          />
        </Grid>
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={6} mt={0.5}>
        <Grid item xs={1} sm={6} md={4}>
          <CustomSelect
            label="Employee ESIC Rate"
            defaultValue={userDetails?.esicInfo?.esicrate}
            options={ESIC_RATE}
            handleChange={(value: String) =>
              handleInputChange(value, "esicrate")
            }
          />
        </Grid>
        <Grid item xs={1} sm={6} md={4}>
          <CustomSelect
            label="Additional Rate"
            defaultValue={userDetails?.esicInfo?.additionalRate}
            options={ESIC_RATE}
            handleChange={(value: String) =>
              handleInputChange(value, "additionalRate")
            }
          />
        </Grid>
        <Grid item xs={1} sm={6} md={4}>
          <CustomReadOnlyInput
            label="Total Rate (in %)"
            inputValue={`${totalRate || 0}%`}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
