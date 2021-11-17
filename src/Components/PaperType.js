import React from "react";
import { Paper, Typography, Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function PaperType() {
  return (
    <div>
      <h3>Paper</h3>
      <Paper sx={{ display: "flex", padding: 3 }}>
        <Avatar sx={{ background: "red", marginRight: 2 }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography variant="h4">Kishor Kc</Typography>
      </Paper>
    </div>
  );
}
