import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'



const FavouriteSlice = createSlice({
    name: 'favourites',
    initialState: [],
    reducers: {
        addToFavourites: (state, action) => {
            state.push(action.payload);
        },
        removeFromFavourites: (state, action)=>{
            return state.filter(item => item.id !== action.payload);
        }
    }
});
   
  

export const {addToFavourites, removeFromFavourites} = FavouriteSlice.actions;
export default FavouriteSlice.reducer