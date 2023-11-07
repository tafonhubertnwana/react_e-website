import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {jwtDecode } from "jwt-decode"

const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginState: "",
  loginError: "",
  userLoaded: false,
}

//http request from the backend 
export const registerUser = createAsyncThunk(
  "auth/registerUser",
   async (values, {rejectWithValue}) => {
      try{
        const token = await axios.post("user/register", {
          name: values.name,
          email: values.email,
          password: values.password
        })

        localStorage.setItem("token", token.data)

        return token.data
      }catch(err){
          console.log(err.response.data);
          return rejectWithValue(err.response.data)
      }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{

  },

  extraReducers: (builder) =>{
    builder.addCase(registerUser.pending, (state, action) => {
      return {...state, registerStatus: "pending"}
    });
    builder.addCase(registerUser.success, (state, action) => {
      if(action.payload){

        const user = jwtDecode(action.payload)

        return{
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          registerStatus: "success"
        }
      }else return state
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return{
        ...state,
        registerStatus: "rejected",
        registerError: action.payload
      }

    });
  }
  
})

export default authSlice.reducer;