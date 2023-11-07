import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

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

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  (values, {rejectWithValue}) => {
      try{
        const token = await axios.post("user/register", {
          name: values.name,
          email: values.email,
          password: values.password
        })

        localStorage.setItem("token", token,data)

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

  extraReducers: {

  }
  
})

export default authSlice.reducer;