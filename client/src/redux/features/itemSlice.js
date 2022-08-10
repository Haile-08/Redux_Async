import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getItem = createAsyncThunk("get/getItem", async () => {
  try {
    const response = await axios.get("/get");
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const postItem = createAsyncThunk("post/postItem", async (data) => {
  try {
    return await axios.post("/post", data).catch((err) => {
      console.log(err);
    });
  } catch (err) {
    console.log(err);
  }
});

export const deleteItem = createAsyncThunk("delete/deleteItem", async (id) => {
  try {
    await axios.delete(`/delete/${id}`).then((res) => {
      return res.data;
    });
  } catch (err) {
    console.log(err);
  }
});
const itemSclice = createSlice({
  name: "item",
  initialState: {
    item: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getItem.pending]: (state, action) => {
      state.loading = true;
    },
    [getItem.fulfilled]: (state, action) => {
      state.loading = false;
      state.item = action.payload;
    },
    [getItem.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [postItem.pending]: (state, action) => {
      state.loading = true;
    },
    [postItem.fulfilled]: (state, action) => {
      state.loading = false;
      state.item = [action.payload];
    },
    [postItem.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { reducer } = itemSclice;

export default reducer;
