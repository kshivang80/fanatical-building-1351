
import React from "react";
import { Link } from "react-router-dom";
//import React from "react";
import "./Button.css";

function Button1() {
  return (
    <Link to="/login">
      <button className="btn">Login</button>
    </Link>
  );
}

export default Button1;