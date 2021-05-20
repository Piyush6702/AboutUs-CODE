import React,{lazy} from 'react';
 
import svg from '../assets/SVG.svg';

import '../styles/home.css';
// const axios = require('axios');
const Founder = lazy(() => import("../components/founder"));
const ComingEvents = lazy(() => import("../components/comingEvents"));
const WhatWeDo = lazy(() => import("../components/whatWeDo"));

function Home () {

    return <>
   <div className="heroheader"> 
      
      <div className="introDiv">
           <div className="divContent">
             <h1>
                Let's build the future of the web
             </h1>
             <p>Get the web's modern capabilities on your own sites and apps with useful guidance and analysis from web.dev.</p>
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
      <Founder/>
    </div>
    </>
}
//testimonial  
// Aur achievements i did not think ki ye sahi rhega abhi k lie
// Newsletter

export default Home;