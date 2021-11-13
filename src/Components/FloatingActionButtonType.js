import React from "react";
import Fab from "@mui/material/Fab";
import CreateIcon from "@mui/icons-material/Create";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function FloatingActionButtonType() {
  return (
    <div>
      <h3>Floating Action Button</h3>
      <Fab style={{ marginRight: "10px" }} color="info" size="medium">
        <InstagramIcon />
      </Fab>
      <Fab
        style={{ marginRight: "10px" }}
        color="secondary"
        size="medium"
        variant="extended"
      >
        <CreateIcon />
        Add Note
      </Fab>
    </div>
  );
}
