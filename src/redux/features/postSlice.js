import { createSlice } from "@reduxjs/toolkit";
import { setError, setLoading } from "./globalSlice";
import useAxios from "../../hooks/useAxios";

const initialState = {
  post: [],
  filteredPost: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    storePost: (state, action) => {
      state.post = action.payload;
    },
    storeFilteredPost: (state, action) => {
      state.filteredPost = action.payload;
    },
  },
});

export const fetchPost = (searchQuery) => async (dispatch) => {
  try {
    dispatch(setLoading({ key: "post", loading: true }));
    const response = await useAxios.get(`/posts/${searchQuery}`);
    const data = response.data;
    console.log("flightSlice", response);
    dispatch(storePost(data));
    dispatch(setError({ key: "post", error: "" }));
    dispatch(setLoading({ key: "post", loading: false }));
  } catch (error) {
    dispatch(setError({ key: "post", error: "Failed to fetch post" }));
    dispatch(storePost([]));
    dispatch(setLoading({ key: "post", loading: false }));
  }
};

export const { storePost, storeFilteredPost } = postSlice.actions;
export default postSlice.reducer;
