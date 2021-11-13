import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

export default function AvtarType() {
  return (
    <div>
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
        <Avatar></Avatar>
      </Stack>
    </div>
  );
}
