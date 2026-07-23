import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  return (
    <div className="signin-container">
      <div className="signin-box">

        <h1>Sign In</h1>

        <input type="email" placeholder="Enter Email" />
        <br /><br />

        <input type="password" placeholder="Enter Password" />
        <br /><br />

        <button>Sign In</button>

        <p>
          Don't have an account?
          <Link to="/"> Login</Link>
        </p>

      </div>
    </div>
  );
};

export default Signin;