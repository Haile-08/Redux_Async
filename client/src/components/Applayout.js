import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import Items from "./Item";

const Applayout = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{
        minHeight: "100vh",
        maxHeight: "auto",
      }}
    >
      <Typography variant="h3" sx={{ color: "#dfe4ea", margin: "30px" }}>
        Redux Todo App
      </Typography>
      <Items />
      <Button startIcon={<AddIcon />} />
    </Grid>
  );
};

export default Applayout;
