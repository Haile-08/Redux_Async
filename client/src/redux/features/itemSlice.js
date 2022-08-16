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
    console.log(data);
    return await axios.post("/post", data).catch((err) => {
      console.log(err);
    });
  } catch (err) {
    console.log(err);
  }
});

export const deleteItem = createAsyncThunk("delete/deleteItem", async (id) => {
  try {
    console.log(id);
    await axios.delete(`/delete/${id}`).then((res) => {
      return res.data;
    });
  } catch (err) {
    console.log(err);
  }
});

export const updateItem = createAsyncThunk(
  "update/updateItem",
  async (data, id) => {
    try {
      await axios.put(`/update/${id}`, data);
    } catch (err) {
      console.log(err);
    }
  }
);
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
    [deleteItem.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteItem.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.item = state.item.filter((item) => item._id !== id);
      }
    },
    [deleteItem.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateItem.pending]: (state, action) => {
      state.loading = true;
    },
  },
});

const { reducer } = itemSclice;

export default reducer;


//more info on 
//https://dev.to/julfikarhaidar/redux-toolkit-crud-example-with-react-hooks-4d98