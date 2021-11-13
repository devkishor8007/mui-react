import React from "react";
import Button from "@mui/material/Button";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function ButtonType() {
  return (
    <>
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
    </>
  );
}
