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
        state.cartItems[itemIndex] = {
        ...state.cartItems[itemIndex],
        cartQuantity: state.cartItems[itemIndex].cartQuantity,
      };
        toast.info( `Increased ${state.cartItems[itemIndex].name} cart quantity`, {
          position: "bottom-left",
        });
      } 
      
      else {
        let tempProduct = { ...action.payload, cartQuantity: 1 };
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
      toast.error('Cart Cleared', {
        position: "botton-left"
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    //get Total
    getTotals(state, action){
      let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) => {
        const {price, cartQuantity} = cartItem;
        const itemTotal = price * cartQuantity

        cartTotal.total += itemTotal
        cartTotal.quantity += cartQuantity

        return cartTotal;
      }, {
        total: 0,
        quantity: 0
      });

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount =  total; 
    }
  },

});

export const {addToCart, removeFromCart, decreaseCart, clearCart, getTotals} = cartSlice.actions;

export default cartSlice.reducer;

