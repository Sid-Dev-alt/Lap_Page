import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";

const WishListSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = WishListSlice.actions;
export default WishListSlice.reducer;
