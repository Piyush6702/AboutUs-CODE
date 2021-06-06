
import React from "react";

import profile_img from "../assets/dev.jpeg";
import "../styles/Executives.css";
import ExecutiveItem from "./ExecutiveItem";
function Executives() {
  return (
    <div className="exe aboutCODE">
      <h1 className='BlockHeading'>Our <span className='Headingspan'>Executives</span></h1>
      <p exe_tag>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ex
        mol
      </p>
      <div class="executives">
        <ExecutiveItem
          src={profile_img}
          name="Monal Jain"
          facebook="#"
          linkedn="#"
          mail="#"
        />
        <ExecutiveItem
          src={profile_img}
          name="Vipin Gautam"
          facebook="#"
          linkedn="#"
          mail="#"
        />
        <ExecutiveItem
          src={profile_img}
          name="Tanu Agarwal"
          facebook="#"
          linkedn="#"
          mail="#"
        />
      </div>
    </div>
  );
}

export default Executives;
