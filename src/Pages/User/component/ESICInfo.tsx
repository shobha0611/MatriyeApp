import { Box, Grid } from "@mui/material";
import CustomInput from "../../../component/CustomInput";
import CustomSelect from "../../../component/CustomSelect";
import { ESIC_CONTRIBUTION, ESIC_RATE } from "../../../constant";
import { useState } from "react";
import CustomReadOnlyInput from "../../../component/CustomReadOnlyInput";

interface InfoData {
  getInfoData(data: any): void;
}

export default function ESICInfo({ getInfoData }: InfoData) {
  const [infoData, setInfoData] = useState<any>({});

  const handleInputChange = (value: String, key: any) => {
    let keydata = `${key}`;
    const newData = { ...infoData, [keydata]: value };
    setInfoData(newData);
    getInfoData({ esicInfo: newData });
  };

  const totalRate =
    Number(infoData?.esicrate?.split("%")[0]) +
    Number(infoData?.additionalRate?.split("%")[0]);

  return (
    <Box mb={5}>
      <Grid container rowSpacing={2} columnSpacing={6}>
        <Grid item xs={1} sm={6} md={4}>
          <CustomSelect
            label="ESIC Contribution"
            options={ESIC_CONTRIBUTION}
            handleChange={(value: String) =>
              handleInputChange(value, "esicContribution")
            }
          />
        </Grid>
        <Grid item xs={1} sm={6} md={4}>
          <CustomInput
            label="ESIC No."
            handleChange={(value: String) => handleInputChange(value, "esicNo")}
          />
        </Grid>
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={6} mt={0.5}>
        <Grid item xs={1} sm={6} md={4}>
          <CustomSelect
            label="Employee ESIC Rate"
            options={ESIC_RATE}
            handleChange={(value: String) =>
              handleInputChange(value, "esicrate")
            }
          />
        </Grid>
        <Grid item xs={1} sm={6} md={4}>
          <CustomSelect
            label="Additional Rate"
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
