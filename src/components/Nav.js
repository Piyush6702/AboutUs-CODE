import React from "react";
import {
    Link
  } from "react-router-dom";
import '../styles/nav.css';
 
function Nav()
{
   
    return (
        <div>
        <div className="header">  
        <div className="logo">
          C.O.D.E
  
        </div>
        <div className="navItems">
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/additem">Projects</Link>
                </li>
               
                <li>
                <Link to="/cart">Past-Events   </Link>
                </li>
                <li>
                <Link to="/cart">Blogs   </Link>
                </li> 
        </ul>
        </div>
          
       <div className="loginButton">
         Login
       </div>
  </div> 
  
</div>
    )
}

export  default  Nav;