import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Addpage = () => {
  const [id, setId] = useState(3);
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
        <Link to="/">
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              color: "#2f3542",
            }}
          />
        </Link>
        <Typography variant="h4" sx={{ color: "#dfe4ea", paddingLeft: "50px" }}>
          Add
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
          variant="contained"
          endIcon={<AddIcon />}
          sx={{
            margin: "30px",
            background: "#3742fa",
          }}
          onClick={() => {
            setId(id + 1);
          }}
        >
          ADD
        </Button>
      </Box>
    </Grid>
  );
};

export default Addpage;
