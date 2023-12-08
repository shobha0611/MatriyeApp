import { TextField, TextFieldProps, styled } from "@mui/material";
import React, { useState } from "react";

interface InputProps {
  label: String;
  readOnly?: boolean | undefined;
  handleChange(value: String): void;
}

const CustomInput = ({ label, readOnly = false, handleChange }: InputProps) => {
  const [value, setValue] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    handleChange(event.target.value);
  };

  return (
    <TextField
      label={label}
      variant="standard"
      error
      fullWidth
      onChange={handleOnChange}
      InputProps={{
        readOnly: readOnly,
      }}
      sx={{
        "& .MuiInputBase-root.MuiInput-root": {
          color: "#c4d1d3",
          fontSize: "1em",
        },
        "& .MuiInputBase-input.MuiInput-input": {
          fontSize: "0.8em",
        },
        "& .MuiInputBase-root.MuiInput-root:before": {
          borderBottom: "1px solid #fff",
        },
        "& .MuiInputBase-root.MuiInput-root:after": {
          borderBottom: "1px solid #fff",
        },
        "& .MuiFormLabel-root.MuiInputLabel-root": {
          color: "#c4d1d3",
          fontSize: "0.8em",
        },
        "& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused": {
          fontSize: "1em",
        },
      }}
    />
  );
};

export default CustomInput;
