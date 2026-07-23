import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
    
 
    <div className="login-box">
      <h1>Login here</h1>
      <input type="email" placeholder="Username" />
      <br /><br />
      <input type="email" placeholder="Enter Email" />
      <br /><br />
      <input type="password" placeholder="Enter Password" />
      <br /><br />
      <button>Login</button>
      <p>
        Don't have an account?
        <Link to="/signup"> Sign Up</Link>
      </p>
    </div>
    
    
    
    
    
    </>
  )
}

export default Login