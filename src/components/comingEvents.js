 
import { useEffect } from 'react';
import React,{useState} from 'react';

function ComingEvents() {


let [counter, changeCounter] = useState(0);

     
 
    return (
      <div className="upcomingEvents">
       
       <h3>
            Upcoming Events.
               </h3>

                <div  className="cards-WhatweDo-div" >
                
                  <div className="cardEvents">
                       
                      <div className="cardsTitle">Hackathon 2.0 </div>
                      <div className="cardsDesc">
                         We build a team of developer who are passionate for their working skills and delivers
                      </div>
                  </div>
                  <div className="cardEvents">
                   
                      <div className="cardsTitle">  Interview Session /Webinar</div>
                      <div className="cardsDesc">
                         We build a team of developer who are passionate for their working skills and delivers
                      </div>
                  </div>
                  <div className="cardEvents">
                  
                      <div className="cardsTitle"> BIET Kickstart   </div>
                      <div className="cardsDesc">
                         Provides help in circullum of GATE  preparations 
                      </div>
                  </div>
               </div>
      </div>
    );
  }
  
  export default ComingEvents;
  