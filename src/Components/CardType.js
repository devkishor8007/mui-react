import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function CardType() {
  return (
    <div>
      <h3>Card</h3>
      <Stack direction="row" marginTop={3} spacing={2}>
        <Card sx={{ maxWidth: 300, height: "350px" }}>
          <CardContent>
            <Typography sx={{ fontWeight: "bold" }} variant="captain">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus nihil molestias dolorem, eos consequatur perspiciatis
              veritatis, assumenda maiores doloremque corporis nesciunt?
              Exercitationem nobis, voluptate illum delectus et laudantium amet
              nam.
            </Typography>
            <Typography>I am</Typography>
            <Typography>Heoe</Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ color: "white", background: "black" }}
              variant="contained"
            >
              Click me
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            height="220px"
            image="https://images.unsplash.com/photo-1543260775-945c562403b3?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            component="img"
            alt="pic"
          />
          <CardContent>
            <Typography sx={{ fontFamily: "Monospace" }} variant="subtitle1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus nihil molestias dolorem, eos consequatur perspiciatis
              veritatis, assumenda maiores doloremque corporis nesciunt?
              Exercitationem nobis, voluptate illum delectus et laudantium amet
              nam.
            </Typography>
            <Typography sx={{ marginTop: "6px", color: "red" }}>
              Second
            </Typography>
            <Typography
              sx={{ marginTop: "6px", color: "green", fontWeight: "bold" }}
            >
              Material UI
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
}
