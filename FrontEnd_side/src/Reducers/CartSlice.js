import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{
    //Add to Cart functionality
    addToCart(state, action) { 
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info( `Increased ${state.cartItems[itemIndex].name} cart quantity`, {
          position: "bottom-left",
        });
      } 
      
      else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(` ${action.payload.name} added to cart`, {
          position: "bottom-left",
        })
      }

        // Adding items to local storage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    //Remove from cart functionality
    removeFromCart(state, action){
      const nextCartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      )

      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

      toast.error(`${action.payload.name}  removed from cart`, {
        position: "bottom-left",
      })
    },

  // Decrease from cart functionality
    decreaseCart(state, action){
      const itemIndex = state.cartItems.findIndex(
        cartItem => cartItem.id === action.payload.id
      ) 
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;

          toast.info(`Decreased ${action.payload.name} cart quantity`, {
            position: 'bottom-left'
          })
        } else if (state.cartItems[itemIndex].cartQuantity === 1){
          const nextCartItems = state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.id
          ) 
    
          state.cartItems = nextCartItems;
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    
          toast.error(`${action.payload.name}  removed from cart`, {
            position: "bottom-left", 
          })
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    //Clear Cart
    clearCart(state, action) {
      state.cartItems = [];
      toast.error(`Car Cleared`, {
        position: "botton-left"
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }
  },

});

export const {addToCart, removeFromCart, decreaseCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

