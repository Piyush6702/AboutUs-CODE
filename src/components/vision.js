import '../styles/social.css'
import React,{lazy} from 'react';

import img from'../assets/vission.svg';

const Founder= lazy(()=>import("./founder"));
 
function Mission() {
    return (
      <div className="aboutCODE">
       
          <section>
          <div className="aboutImage">
                  <img src={img} alt="s" className="aboutImg"></img>

              </div>
              <div className="aboutHead">
              <h1>
               Why we are building C.O.D.E
             </h1>
          <p>
         * With the rising trend of video consumption, we believe videos are a great medium to educate & train people
          <br></br>
          <br></br>
        *   But we found a gap that there are not much product video creation tools or video-first product onboarding platforms.
        <br>
        </br> 
        <br></br>
        * We went and built one. With Trainn you can create product training videos including product walkthroughs and host as a training academy
           {/* or embed within your product as structured learning paths during onboarding process. */}
       </p>
              </div>

            
          </section>
           <section>
<Founder/>
           </section>
      </div>
    );
  }
  
  export default Mission;
  