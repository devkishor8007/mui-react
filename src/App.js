import React from "react";
import Button from "@mui/material/Button";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { IconButton } from "@mui/material";
import Fab from "@mui/material/Fab";
import CreateIcon from "@mui/icons-material/Create";
import InstagramIcon from "@mui/icons-material/Instagram";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

export default function App() {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <h1 style={{ textAlign: "center" }}>Get started with React and MUI</h1>
        <hr />
        <h3>Button</h3>
        <Button color="success" variant="outlined">
          Click
        </Button>
        <Button href="https://www.facebook.com">Link</Button>
        <Button disabled href="https://www.facebook.com">
          Link
        </Button>

        <Button color="success" variant="contained">
          Contained
        </Button>
        <Button style={{ marginLeft: "10px" }} color="error" variant="outlined">
          outlined
        </Button>
        <Button style={{ marginLeft: "10px" }} variant="text">
          text
        </Button>
        <Button style={{ marginLeft: "10px" }} variant="string">
          string
        </Button>

        <Button
          startIcon={<AlternateEmailIcon />}
          style={{ marginLeft: "10px" }}
          color="error"
          variant="outlined"
        >
          Button with Start Icon
        </Button>
        <Button
          color="success"
          endIcon={<AlternateEmailIcon />}
          style={{ marginLeft: "10px" }}
          variant="outlined"
        >
          Button with End Icon
        </Button>

        <h3>Icon Button</h3>
        <IconButton color="info" size="large">
          <CameraAltIcon />
        </IconButton>

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

        <h3>Box</h3>
        <Box>Hello Box</Box>

        <h3>Alignment</h3>
        <Box
          textAlign="left"
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "red",
          }}
        >
          Left
        </Box>
        <Box textAlign="center">Center</Box>
        <Box textAlign="right">Right</Box>

        <h3>Font Weight, Font Style,Font family And Font Size</h3>
        <Box fontStyle="italic" fontSize="50px" fontWeight="fontWeightBold">
          Bold
        </Box>
        <Box
          sx={{
            fontStyle: "oblique",
            fontSize: 24,
            fontWeight: 500,
            fontFamily: "Monospace",
          }}
        >
          Bold
        </Box>

        <h3>Avatar</h3>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="one"
            sx={{ width: 56, height: 56 }}
            src="https://images.unsplash.com/photo-1543260775-945c562403b3?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          ></Avatar>
          <Avatar>
            <LocalFireDepartmentIcon />
          </Avatar>
          <Avatar sx={{ width: 80, height: 80, backgroundColor: "green" }}>
            <AssignmentIcon sx={{ width: 40, height: 40 }} />
          </Avatar>
        </Stack>
      </div>
    </>
  );
}
