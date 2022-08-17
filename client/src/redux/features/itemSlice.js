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

export const postItem = createAsyncThunk(
  "post/postItem",
  async ({ title, text }) => {
    try {
      console.log(title);
      console.log(text);
      return await axios.post("/post", { title, text }).catch((err) => {
        console.log(err);
      });
    } catch (err) {
      console.log(err);
    }
  }
);

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
  async ({ title, text, id }) => {
    try {
      await axios.put(`/update/${id}`, { title, text });
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
    [updateItem.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.item = state.item.map((i) => 
          i._id === id? action.payload : i
        );
      }
    },
    [updateItem.rejected]:(state,action)=>{
      state.loading = false;
      state.error = action.payload;
    }
  },
});

const { reducer } = itemSclice;

export default reducer;


//more info on 
