import { createSlice } from "@reduxjs/toolkit"

export const Cart = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
    total:0
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existing = state.cartData.find(p => p.id === product.id)

      if (!existing) {
        state.cartData.push({ ...product, quantity: 1 })
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload
      state.cartData = state.cartData.filter(p => p.id !== id)
    },

    increaseQty: (state, action) => {
      const id = action.payload
      const item = state.cartData.find(p => p.id === id)
      if (item) item.quantity += 1
    },

    decreaseQty: (state, action) => {
      const id = action.payload
      const item = state.cartData.find(p => p.id === id)
      if (item && item.quantity > 1) item.quantity -= 1
    },
    getTotal:(state)=>{
        let value=0
        state.cartData.forEach(product=>{
            value+=product.price*product.quantity
        })
        state.total=value
    }
  }
})

export const { addToCart, removeFromCart, increaseQty, decreaseQty ,getTotal} =
  Cart.actions


