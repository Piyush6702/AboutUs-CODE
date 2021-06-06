import React from "react";
// import "../styles/Executives.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

function ExecutiveItem(props) {
  return (
    <div className="exe_main_cot">
    <img src={props.src} alt="profile-pic" className="cards_item_img1" />
      <p className="exe_name">{props.name}</p>
      <div style={{ padding: "0px 0px 5px 0px" }} className="des">
        <a className="icn" href={props.facebook}>
          <FaFacebook style={{color:'#ec7c2d'}}/>
        </a>
        <a className="icn" href={props.linkedn}>
          <FaLinkedinIn style={{color:'#ec7c2d'}}/>
        </a>
        <a className="icn" href={props.mail}>
          <ImMail4 style={{color:'#ec7c2d'}} />
        </a>
      </div>
    </div>
  );
}

export default ExecutiveItem;
