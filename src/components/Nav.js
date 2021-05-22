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
          
          <Link to="/">C.O.D.E</Link>
        </div>
        <div className="navItems">
            <ul>
                <li>
                <Link to="/features">Features</Link>
                </li>
                <li>
                <Link to="/additem">Projects</Link>
                </li>
               
                <li>
                <Link to="/events">Past-Events   </Link>
                </li>
                <li>
                <Link to="/blogs">Blogs   </Link>
                </li> 
                <li>
                <Link to="/partners">Partners   </Link>
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