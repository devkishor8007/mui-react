import {
  Toolbar,
  AppBar,
  List,
  IconButton,
  Typography,
  Drawer,
  ListItemIcon,
  ListItemText,
  ListItem,
  Divider,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

import MenuIcon from "@mui/icons-material/Menu";

import React from "react";

export default function AppBarType() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List disablePadding>
          {["First", "Second", "Third"].map((data) => {
            return (
              <div>
                <ListItem sx={{ marginTop: "20px" }}>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary={data} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </Drawer>
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <IconButton
            edge="start"
            sx={{ mr: 2 }}
            aria-label="menu"
            size="large"
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1, mr: 2 }}>React</Typography>
          <Typography sx={{ mr: 2 }}>Home</Typography>
          <Typography sx={{ mr: 2 }}>About</Typography>
          <Typography sx={{ mr: 2 }}>Contact</Typography>
          <Typography sx={{ mr: 2 }}>Notification</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
