import { Badge, Stack } from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

export default function BadgeType() {
  return (
    <div>
      <h3>Badge</h3>
      <Stack spacing={2} direction="row">
        <Badge badgeContent={4} color="error" variant="standard">
          <CircleNotificationsIcon color="action" />
        </Badge>
        <Badge badgeContent={412} color="error" variant="standard">
          <MailIcon color="action" />
        </Badge>
      </Stack>
    </div>
  );
}
