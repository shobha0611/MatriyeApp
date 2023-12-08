import { Popover, PopoverProps, useTheme } from "@mui/material";

export default function CustomPopover({ children, ...rest }: PopoverProps) {
  const theme = useTheme();

  return (
    <Popover
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      slotProps={{
        paper: {
          sx: {
            background: "#000000",
            p: 2,
            mt: 0.5,
            borderRadius: 1,
          },
        },
      }}
      {...rest}
    >
      {children}
    </Popover>
  );
}
