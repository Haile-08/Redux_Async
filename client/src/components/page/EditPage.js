import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";

const Editpage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
        maxHeight: "auto",
      }}
      minWidth={800}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          width: "600px",
          height: "500px",
          backgroundColor: "#57606f",
          borderRadius: "10px",
        }}
      >
        <BackButton />

        <Typography variant="h4" sx={{ color: "#dfe4ea", paddingLeft: "50px" }}>
          Edit
        </Typography>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          sx={{
            margin: "30px",
            color: "#dfe4ea",
          }}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={5}
          sx={{
            margin: "30px",
            color: "#dfe4ea",
          }}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <Button
          startIcon={<EditIcon />}
          sx={{
            color: "#2f3542",
          }}
          onClick={() => {
            dispatch(updateItem({ id: id, title: title, text: text }));
          }}
        />
      </Box>
    </Grid>
  );
};

export default Editpage;
