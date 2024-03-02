import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addProduct(state, action) {
            state.push(action.payload)
        },
        removeProduct(state, action) {
            return state.filter(item => item.id !== action.payload)
        }

    }
})
export default CartSlice.reducer;
export const { addProduct, removeProduct } = CartSlice.actions;