import "../styles/social.css";
import React, { lazy } from "react";

import img from "../assets/vission.svg";

const Values = lazy(() => import("./ourValues"));

function Mission() {
  return (
    <div className="aboutCODE">
      <section>
        <div className="aboutImage">
          <img src={img} alt="s" className="aboutImg"></img>
        </div>
        <div className="aboutHead">
          <h1 className='BlockHeading'>
            Why we are building <span className="Headingspan">C.O.D.E</span>{" "}
          </h1>
          <ul id='Visionlist'>
            <li className='VisionlistItems'>
              With the rising trend of video consumption, we believe videos are
              a great medium to educate & train people
            </li>
            <li className='VisionlistItems'>
              But we found a gap that there are not much product video creation
              tools or video-first product onboarding platforms.
            </li>
            <li className='VisionlistItems'>
              We went and built one. With Trainn you can create product training
              videos including product walkthroughs and host as a training
              academy
            </li>
            {/* or embed within your product as structured learning paths during onboarding process. */}
          </ul>
        </div>
      </section>
       

    </div>
  );
}

export default Mission;
