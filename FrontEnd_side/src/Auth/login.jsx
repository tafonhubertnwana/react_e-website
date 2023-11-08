/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect  } from "react";
import {useDispatch, useSelector} from "react-redux";
import { loginUser } from "../authentication/authSlice";
import { StyledForm } from "./sytledForm";
import { useNavigate } from "react-router-dom";

const Login= () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    if(auth._id){
      Navigate("/home");
    }
  }, [auth._id, Navigate]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(loginUser(user))
  }

  

  return (
    <>
      <StyledForm onSubmit ={handleSubmit}>
        <h2>Login</h2>
        
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
          {auth.loginStatus === "pending" ? "Submitting" : "login"}
        </button>

        {auth.loginStatus === "rejected" ? (
          <p>{auth.loginError}</p>
        ) : null}
      </StyledForm>
    </>
  )
}

export default Login;