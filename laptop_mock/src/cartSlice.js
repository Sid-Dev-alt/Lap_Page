import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const exists = state.find(l => l.id === item.id);
            if(!exists) state.push(item);
        },
        removeFromCart: (state,action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer;