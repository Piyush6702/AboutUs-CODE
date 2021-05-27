import React,{lazy} from 'react';
 
import svg from '../assets/SVG.svg';

import '../styles/home.css';

// const Founder = lazy(() => import("../components/founder"));
const ComingEvents = lazy(() => import("../components/comingEvents"));
const WhatWeDo = lazy(() => import("../components/whatWeDo"));
const Testimonials= lazy(()=>import("../components/testimonials"));
const Newsletter= lazy(()=>import("../components/newsletter"));
const Social= lazy(()=>import("../components/social"));
function Home () {

    return <>
   <div className="heroheader"> 
      
      <div className="introDiv">
           <div className="divContent">
             <h1>
              Learn ,Build, Innovate
             </h1>
             <p>
    Yahn koi 2-3 line ki tagline buss isse jyda nahi
              </p>
           <div className="loginButtonDiv">
           <button className="getStarted">Webinars</button>
           <button className="getProjects">Projects</button>
           </div>
           </div>
           <div className="introSVG">
               <div className="svg">
                     
                    <img src={svg} className="finalSVG" alt="introImage"/>
               </div>
           </div>
           </div>
      <section className="vision">
            <h2>
            Our Vision
           </h2>
               <p>
               "As the Computer Science demand advances, Learner's expectations grow. With C.O.D.E guidance, you can give yourself  the best experience, wherever they are."
               </p>
              {/* <div className="exploreButton"> <a href ="#">  Explore C.O.D.E</a> </div>  */}
           </section>
      <WhatWeDo/>   
      <section >
      <ComingEvents/>
      </section>    
      
      <Testimonials/>
      <Newsletter/>
      <Social/>
    </div>
    </>
}
 
export default Home;