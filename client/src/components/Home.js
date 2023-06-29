
import React from "react";
import { Link } from "react-router-dom";

function Home(){
  return (
   <div>
    <h1>Voice To Vision</h1>
    <div className="container">
      <label>Username</label>
      <input type="text" placeholder="Enter Username" name="username" required/>
      <label>Password:</label>
      <input type="password" placeholder="Enter Password" name="password" required/>
      <button type="submit">Login</button>
    </div>
    <div>
      <Link to="/form">
        <button>Start New Project</button>
      </Link>
    </div>
   </div>
  );
}



export default Home;