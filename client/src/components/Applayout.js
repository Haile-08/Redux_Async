import React, { useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PacmanLoader from "react-spinners/PacmanLoader";

import Items from "./Item";
import { getItem } from "../redux/features/itemSlice";

const Applayout = () => {
  const dispatch = useDispatch();
  const { item, loading } = useSelector((state) => state.item);

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);

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
      {loading ? (
        <PacmanLoader color="#ffffff" loading={loading} size={50} />
      ) : (
        <>
          <Typography variant="h3" sx={{ color: "#dfe4ea", margin: "30px" }}>
            Redux Todo App
          </Typography>

          {item.map((item) => {
            return <Items key={item._id} />;
          })}

          <Link to="/add">
            <Button startIcon={<AddIcon />} />
          </Link>
        </>
      )}
    </Grid>
  );
};

export default Applayout;
