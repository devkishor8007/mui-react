import React from "react";
import Box from "@mui/material/Box";

export default function BoxType() {
  return (
    <div>
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
    </div>
  );
}
