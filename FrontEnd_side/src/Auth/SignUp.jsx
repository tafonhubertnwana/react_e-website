import { useState } from "react";
import "./signUp.css"
import { useSignup } from "../authentication/useSignUp";

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup( name, email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Name:</label>
      <input 
        type="name" 
        placeholder="Name"
        onChange={(e) => setName(e.target.value)} 
        value={name} 
      />
      
      <label>Email address:</label>
      <input 
        type="email" 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup