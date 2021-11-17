import React from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  List,
  Typography,
  ListItemText,
  ListItem,
} from "@mui/material";

function SimpleDialog(props) {
  const { onclose, selectedName, open } = props;

  const names = ["ram", "sham", "ajay"];

  const handleClose = () => {
    onclose(selectedName);
  };

  const handleListItemClick = (value) => {
    onclose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List>
        {names.map((name) => (
          <ListItem button onClick={() => handleListItemClick(name)} key={name}>
            <Avatar sx={{ marginRight: "10px" }}></Avatar>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function DialogType() {
  const [open, setopen] = React.useState(false);

  const [selectedName, setSelectdName] = React.useState([]);

  const handleClose = (val) => {
    setopen(false);
    setSelectdName(val);
  };

  const handleClick = () => {
    setopen(true);
  };
  return (
    <div>
      <h3>Dialogs</h3>
      <Typography>Selected: {selectedName}</Typography>
      <Button variant="outlined" onClick={handleClick}>
        Choose Any One
      </Button>

      <SimpleDialog
        selectedName={selectedName}
        open={open}
        onclose={handleClose}
      />
    </div>
  );
}
