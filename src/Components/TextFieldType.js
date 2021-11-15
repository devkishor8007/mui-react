import { Typography } from "@mui/material";
import React from "react";

export default function TextFieldType() {
  const [name, updateName] = React.useState("");

  function submitForm(e) {
    e.preventDefault();

    updateName("");
  }

  return (
    <>
      <div style={{ margin: "20px" }}>
        <h3>Form</h3>
        <form action="" onSubmit={submitForm}>
          <input
            type="text"
            name="name"
            id="name"
            style={{ marginTop: "5px", padding: "10px" }}
            value={name === "" ? "" : name}
            placeholder={name === "" ? "Enter your name" : "name"}
            autoComplete="off"
            onChange={(e) => updateName(e.target.value)}
          ></input>
        </form>

        <Typography>{name}</Typography>
      </div>
    </>
  );
}
