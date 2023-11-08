/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect  } from "react";
import {useDispatch, useSelector} from "react-redux";
import { registerUser } from '../authentication/authSlice';
import { StyledForm } from "./sytledForm";
import { useNavigate } from "react-router-dom";

const signUp = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    if(auth._id){
      Navigate("/home")
    }
  }, [auth._id, Navigate]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(registerUser(user))
  }

  

  return (
    <>
      <StyledForm onSubmit ={handleSubmit}>
        <h2>Sign Up</h2>
        <input 
          type="text" 
          placeholder="name" 
          onChange = {(e)=> setUser({...user, name: e.target.value}) }
        />

        <input 
          type="email" 
          placeholder="email" 
          onChange = {(e)=> setUser({...user, email: e.target.value}) } 
        />

        <input 
          type="password" 
          placeholder="password" 
          onChange = {(e)=> setUser({...user, password: e.target.value}) }
        />

        <button>
          {auth.registerStatus === "pending" ? "Submitting" : "Register"}
        </button>

        {auth.registerStatus === "rejected" ? (
          <p>{auth.registerError}</p>
        ) : null}
      </StyledForm>
    </>
  )
}

export default signUp;