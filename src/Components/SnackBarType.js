import { Button, IconButton } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

import React from "react";

export default function SnackBarType() {
  const [open, setOpen] = React.useState(false);

  function buttonClick() {
    setOpen(true);
  }

  const closeSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={closeSnack}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={closeSnack}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <h3>Snack Bar</h3>
      <Button onClick={buttonClick}>Open The Page</Button>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={closeSnack}
        message="Hy Its your first page"
        action={action}
      ></Snackbar>
    </div>
  );
}
