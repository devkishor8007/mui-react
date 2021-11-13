import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";

export default function ListType() {
  return (
    <div>
      <h3>List</h3>
      <List sx={{ marginTop: "10px" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ background: "red" }}>
              <AssignmentIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Kishor Kc" secondary="Chitwan, Nepal" />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ background: "green" }}>
              <AssignmentIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Arjun Kc" secondary="Sauraha, Nepal" />
        </ListItem>
      </List>
    </div>
  );
}
