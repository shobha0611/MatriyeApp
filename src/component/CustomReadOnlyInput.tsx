import { TextField, TextFieldProps, styled } from "@mui/material";
import React, { useState } from "react";

interface InputProps {
  label: String;
  inputValue: String;
}

const CustomReadOnlyInput = ({ label, inputValue }: InputProps) => {
  return (
    <TextField
      label={label}
      value={inputValue}
      variant="standard"
      error
      fullWidth
      InputProps={{
        readOnly: true,
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

export default CustomReadOnlyInput;
