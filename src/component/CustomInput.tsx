import { TextField, TextFieldProps, styled } from "@mui/material";
import React, { useEffect, useState } from "react";

interface InputProps {
  label: String;
  defaultValue?: String;
  readOnly?: boolean | undefined;
  handleChange(value: String): void;
}

const CustomInput = ({
  label,
  defaultValue,
  readOnly = false,
  handleChange,
}: InputProps) => {
  const [value, setValue] = useState<String>(defaultValue || "");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    handleChange(event.target.value);
  };

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <TextField
      label={label}
      value={value}
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
