import { createSlice } from '@reduxjs/toolkit'

export interface CartState {
  cart: { id: string, name: string, price: string, quantity: number, img: string }[],
  count: number
}

const initialState: CartState = {
  cart: [],
  count: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let ind = state.cart.findIndex((obj) => obj.id == action.payload.cart.id)
      if (ind != -1) {
        state.cart[ind].quantity += 1;
      }
      else {
        action.payload.cart.quantity = 1;
        state.cart.push(action.payload.cart)
      }


      state.count = state.cart.reduce((pre: any, curr: any) => curr?.quantity + pre, 0);
    },
    removeFromCart: (state, action) => {
      let index = state.cart.findIndex((obj) => obj.id == action.payload.id)
      if (index > -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity -= 1;
        }
        else {
          state.cart.splice(index, 1);
        }

      }
      state.count = state.cart.reduce((pre: any, curr: any) => curr?.quantity + pre, 0);
    },

  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer