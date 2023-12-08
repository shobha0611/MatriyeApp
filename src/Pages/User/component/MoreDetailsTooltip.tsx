import { Button, Box } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useNavigate } from "react-router-dom";

import CustomPopover from "../../../component/CustomPopover";

export interface MoreDetailsTooltipProps {
  userId: string | number;
}

export default function MoreDetailsTooltip({
  userId,
}: MoreDetailsTooltipProps) {
  const navigate = useNavigate();
  const [moreOptionsAnchorEl, setMoreOptionsAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  const handleOpenMoreOptions = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setMoreOptionsAnchorEl(event.currentTarget);
  };

  const handleCloseMoreOptions = () => {
    setMoreOptionsAnchorEl(null);
  };

  const handleEdit = (path: any) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <>
      <Button onClick={handleOpenMoreOptions}>
        <MoreVertIcon sx={{ color: "#fff" }} />
      </Button>
      <CustomPopover
        open={Boolean(moreOptionsAnchorEl)}
        anchorEl={moreOptionsAnchorEl}
        onClose={handleCloseMoreOptions}
      >
        <Box display="flex" flexDirection="column">
          <Button
            onClick={() => handleEdit(`/user/edit/${userId}`)}
            startIcon={<EditIcon sx={{ color: "#fff" }} />}
            className="btn-underline"
          >
            Edit
          </Button>
          <hr className="divider" />
          <Button
            onClick={() => handleEdit(`/user/view/${userId}`)}
            startIcon={<RemoveRedEyeOutlinedIcon sx={{ color: "#fff" }} />}
            className="btn-underline"
          >
            View
          </Button>
        </Box>
      </CustomPopover>
    </>
  );
}
