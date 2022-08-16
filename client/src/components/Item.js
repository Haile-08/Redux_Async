import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";

import { deleteItem } from "../redux/features/itemSlice";

const Items = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#57606f",
          width: "400px",
          margin: "10px",
        }}
      >
        <CardHeader />
        <CardContent>
          <Typography sx={{ color: "#dfe4ea", marginLeft: "50px" }}>
            text area
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            startIcon={<DeleteIcon />}
            sx={{
              color: "#2f3542",
            }}
            onClick={() => {
              dispatch(deleteItem(id));
            }}
          />
          <Link to="/Edit">
            <Button
              startIcon={<EditIcon />}
              sx={{
                color: "#2f3542",
              }}
            />
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default Items;
