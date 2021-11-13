import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function GridType() {
  const value = [8, 2, 7, 4, 5, 6, 1, 9, 16];
  const [state] = React.useState(value);

  const sorting = state.sort();

  return (
    <div>
      <h3>Grid</h3>
      <Grid lg={12} container columnSpacing={3} direction="row" rowSpacing={2}>
        {sorting.map((e) => {
          return (
            <Grid item>
              <Box
                sx={{
                  textAlign: "center",
                  color: "white",
                  background: "green",
                  height: "200px",
                  width: "400px",
                  borderRadius: "10px",
                }}
              >
                {e}
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
