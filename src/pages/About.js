import '../styles/about.css'
import React,{lazy} from 'react';
const AboutCode= lazy(()=>import("../components/aboutCode"));
 
const Mission= lazy(()=>import("../components/mission"));
const Vision= lazy(()=>import("../components/vision"));
 
function About() {
    return (
      <div className="about">
        
       <AboutCode/> 
      
      <Mission/>
     
      <Vision/>
      
      </div>
    );
  }
  
  export default About;
  