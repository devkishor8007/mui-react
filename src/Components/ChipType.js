import React from "react";
import { Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

export default function ChipType() {
  function handleDelete() {
    console.log("Delete the Chip");
  }
  return (
    <div>
      <h3>Chip </h3>
      <Chip
        sx={{ marginRight: "10px" }}
        avatar={
          <Avatar sx={{ background: "red" }} style={{ color: "white" }}>
            C
          </Avatar>
        }
        label="Chip Box"
      ></Chip>
      <Chip
        sx={{ marginRight: "10px" }}
        color="info"
        variant="outlined"
        label="Hello"
        icon={<FaceIcon />}
      ></Chip>
      <Chip
        sx={{ marginRight: "10px" }}
        color="info"
        variant="outlined"
        label="Delete Me"
        onDelete={handleDelete}
      ></Chip>
    </div>
  );
}
