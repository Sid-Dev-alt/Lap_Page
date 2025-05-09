import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import favouriteReducer from './Features/FavouriteSlice'
import wishListReducer from './Features/WishListSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourites: favouriteReducer,
    wishlist: wishListReducer
  },
});

export default store;
