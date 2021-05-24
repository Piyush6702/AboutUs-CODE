import React,{useState} from "react";
import {
    NavLink
  } from "react-router-dom";
import '../styles/nav.css';
 
function Nav()
{

    let [showSideNav,setSideNav]=useState(false);

    return (
        <div>
        <div className="header">  
        
        <div className="hamburger">
               <button onClick={()=> setSideNav(!showSideNav)}>
               &#9776;
               </button>
        </div>
        <div className="logo">
          <NavLink to="/">C.O.D.E</NavLink>
        </div>

     { showSideNav &&  <div className="sideNav">
     <span onClick={()=> setSideNav(!showSideNav)}>
       <p> X</p>
    
     </span>
     <ul className="sidebar">
               
                <li>
                <NavLink to="/additem">Projects</NavLink>
                </li>
                <li>
                <NavLink to="/events"> Events</NavLink>
                </li>
                <li>
                <NavLink to="/blogs">Blogs</NavLink>
                </li> 
                 
                <li>
                <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Contact</NavLink>
                </li>
           </ul>
        </div>}
        <div className="navItems" > 
            <ul >
                
            <li>
                <NavLink to="/additem">Projects</NavLink>
                </li>
                <li>
                <NavLink to="/events"> Events</NavLink>
                </li>
                <li>
                <NavLink to="/blogs">Blogs</NavLink>
                </li> 
                 
                <li>
                <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Contact</NavLink>
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