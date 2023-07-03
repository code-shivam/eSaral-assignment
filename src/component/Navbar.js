import React from "react";
import './navbar.css'
import arrowleft from "./Photo/arrow-left.png"
import search from "./Photo/search.png"

function Navbar() {
  return (
    <div className="navcontainer">
      <div className="container1"> 
        <img src={arrowleft} className="arrow" />
        <h1>Physic</h1>
      </div>
      <div>
        <img src={search}className="search"/>
      </div>
    </div>
  );
}

export default Navbar;
