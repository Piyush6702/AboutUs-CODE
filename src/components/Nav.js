import React,{useEffect, useState} from "react";
import {
    Link
  } from "react-router-dom";
import '../styles/nav.css';
 
function Nav()
{

    let [showSideNav,setSideNav]=useState(false);
  let myFunction=function () {
  
    setSideNav(!showSideNav);
    
  }

    return (
        <div>
        <div className="header">  
        
        <div className="hamburger">
               <button onClick={()=> setSideNav(!showSideNav)}>
               &#9776;
               </button>
        </div>
        <div className="logo">
          <Link to="/">C.O.D.E</Link>
        </div>

     { showSideNav &&  <div className="sideNav">
     <span onClick={()=> setSideNav(!showSideNav)}>Close
    
     </span>
     <ul className="sidebar">
                <li>
                <Link to="/features">Features</Link>
                </li>
                <li>
                <Link to="/additem">Projects</Link>
                </li>
                <li>
                <Link to="/events">Past-Events</Link>
                </li>
                <li>
                <Link to="/blogs">Blogs</Link>
                </li> 
                <li>
                <Link to="/partners">Partners</Link>
                </li> 
           </ul>
        </div>}
        <div className="navItems" > 
            <ul >
                <li>
                <Link to="/features">Features</Link>
                </li>
                <li>
                <Link to="/additem">Projects</Link>
                </li>
                <li>
                <Link to="/events">Past-Events</Link>
                </li>
                <li>
                <Link to="/blogs">Blogs</Link>
                </li> 
                <li>
                <Link to="/partners">Partners</Link>
                </li> 
           </ul>
        </div>
     <div>  
   </div>
        
       <div className="loginButton">
         Login
       </div>
  </div> 
</div>
    )
}

export  default  Nav;