import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddReactionIcon from "@mui/icons-material/AddReaction";

export default function StackType() {
  return (
    <div>
      <h3>Stack</h3>
      <Stack spacing={2} direction="row">
        <Avatar sx={{ background: "red" }}>
          <AddReactionIcon />
        </Avatar>
        <Card sx={{ width: "90px" }}>
          <CardContent>Hello</CardContent>
        </Card>
        <CircularProgress color="warning" size={40}></CircularProgress>
        <Box sx={{ height: "60px", width: "60px", background: "red" }}></Box>
      </Stack>
    </div>
  );
}
