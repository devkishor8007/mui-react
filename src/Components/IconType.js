import React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { IconButton } from "@mui/material";

export default function IconType() {
  return (
    <div>
      <h3>Icon Button</h3>
      <IconButton color="info" size="large">
        <CameraAltIcon />
      </IconButton>
    </div>
  );
}
