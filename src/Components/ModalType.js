import { Modal, Button, Card, CardContent, CardActions } from "@mui/material";

import React from "react";

export default function ModalType() {
  const [open, setopen] = React.useState(false);

  const handleOpen = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
  };
  return (
    <div>
      <h3>Modal</h3>
      <Button variant="outlined" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Card sx={{ minwidth: 275 }}>
          <CardContent>Thank you for opening</CardContent>
          <CardActions>
            <Button onClick={handleClose} variant="contained">
              Close Modal
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
}
