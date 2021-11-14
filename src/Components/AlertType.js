import Alert from "@mui/material/Alert";

import React from "react";

export default function AlertType() {
  return (
    <div>
      <h3>Alert</h3>
      <Alert color="warning" severity="warning" variant="standard">
        This is reactjs
      </Alert>
      <Alert
        sx={{ marginTop: "10px" }}
        color="info"
        severity="success"
        variant="outlined"
      >
        This is Material UI
      </Alert>
    </div>
  );
}
