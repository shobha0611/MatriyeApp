import { InputLabel, MenuItem, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ChangeEvent, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface OptionProps {
  id: String;
  text: String;
}
interface InputProps {
  label: String;
  options: OptionProps[];
  handleChange(value: String): void;
}

const CustomSelect: React.FC<InputProps> = ({
  label,
  options,
  handleChange,
}) => {
  const [value, setValue] = useState("");

  const handleOnChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    handleChange(event.target.value);
  };

  return (
    <div>
      <FormControl
        variant="standard"
        sx={{
          "& .MuiInput-input": {
            padding: "1px 0 2px",
          },
          "& .MuiFormLabel-root.MuiInputLabel-root": {
            color: "#c4d1d3",
            fontSize: "0.8em",
          },
          "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
            fontSize: "1em",
          },
          "& .MuiInputBase-root.MuiInput-root:before": {
            borderBottom: "1px solid #fff",
          },
          "& .MuiInputBase-root.MuiInput-root:after": {
            borderBottom: "1px solid #fff",
          },
        }}
        fullWidth
      >
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={handleOnChange}
          label="-Select-"
          IconComponent={() => <ExpandMoreIcon sx={{ color: "#fff" }} />}
          sx={{
            "& .MuiSelect-select": {
              color: "#fff",
              fontSize: "0.8em",
            },
          }}
        >
          {options?.map((opt: any, idx: number) => (
            <MenuItem
              key={`${opt.id}_idx`}
              value={opt?.text}
              sx={{
                "&.MuiButtonBase-root.MuiMenuItem-root": {
                  fontSize: "0.8em",
                },
              }}
            >
              {opt?.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
