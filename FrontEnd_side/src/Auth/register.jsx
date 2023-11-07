import { useState} from "react";

const signUp = () => {

  const[user, setUser] = useState({
    name: "",
    email: "",
    
  })
  return (
    <>
      <form>
        <h2>Sign Up</h2>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Sign Up</button>
      </form>
    </>
  )
}

export default signUp;