import '../styles/events.css'
import svg from '../assets/SVG.svg';
import {
   Link
} from "react-router-dom";
function Events() {
    return (
      <div className="events"> 
        <section className="eventsOuter"> 
        <div className="eventsCategory">
              <a href="#abs" className="tab" selected>All events</a>
              <a href="#a"className="tab"> Webinar</a>
              <a href="#k" className="tab"> Coding Events</a>
           </div>
           <div className="eventsWrapper">     
             <div className="eventsSubCategory  ">
              <a href="#abs" className="tab" selected>Current</a>
              <a href="#a"className="tab"> Upcoming</a>
              <a href="#k" className="tab">Recently closed</a>
           </div>
           <div className="eventBody">
                <div className="eventCardContainer">
                   <div className="eventsContainer">
                  
                  
                    <div className="cardEvent">
                        <div className="card">
                           <div className="cardHeader">
                               <div className="cardHeaderInner">
                                 <img src={svg} alt="cardimage"className="cardImage"></img>
                               </div>
                           </div>
                       
                          <div className="cardMain">
                              <p>BIET HACK  | Ideas meet technology </p>
                              <div className="eventDetails">
                                 <div className="eventInfo">
                                   <p>
                                     <b>
                                       Starts On
                                     </b>
                                   </p>
                                   <p>
                                   08:00 PM, 24 MAY 2021
                                   </p>
                                 </div>
                                 <div className="eventInfo">
                                 <p>
                                     <b> Entry Fees </b>
                                 </p>
                                 <p>  Free   </p>
                                 </div>
                                 <div className="eventInfo ">
                                 <p>
                                     <b>
                                      Venue
                                     </b>
                                   </p>
                                   <p>
                                  Online
                                   </p>
                                 </div>
                              </div>
                              <div className="shortDescription">
                              Run through the wave of codes smoothly and showcase your coding skills to stay ahead amongst your peers.  

                              </div>
                              <div className="tagsContainer">
                                 <div className="tags">
                                 Coding
                                 </div>
                                 <div className="tags">
                                 Second year
                                 </div>
                              </div>
                          </div>
                        </div>
                       </div>
                        
                       <div className="cardEvent">
                        <div className="card">
                           <div className="cardHeader">
                               <div className="cardHeaderInner">
                                 <img src={svg} alt="cardimage"className="cardImage"></img>
                               </div>
                           </div>
                       
                          <div className="cardMain">
                              <p>BIET HACK  | Ideas meet technology </p>
                              <div className="eventDetails">
                                 <div className="eventInfo">
                                   <p>
                                     <b>
                                       Starts On
                                     </b>
                                   </p>
                                   <p>
                                   08:00 PM, 24 MAY 2021
                                   </p>
                                 </div>
                                 <div className="eventInfo">
                                 <p>
                                     <b>
                                       Entry Fees
                                     </b>
                                   </p>
                                   <p>
                                  Free
                                   </p>

                                 </div>
                                 <div className="eventInfo ">
                                 <p>
                                     <b>
                                      Venue
                                     </b>
                                   </p>
                                   <p>
                                  Online
                                   </p>
                                 </div>
                              </div>
                              <div className="shortDescription">
                              Run through the wave of codes smoothly and showcase your coding skills to stay ahead amongst your peers.  

                              </div>
                              <div className="tagsContainer">
                                 <div className="tags">
                                 Coding
                                 </div>
                                 <div className="tags">
                                 Second year
                                 </div>
                              </div>
                              <Link to="/event/id" className="eventId">Register</Link>
                          </div>
                        </div>
                       </div>
                   </div>
                </div>
               
           </div>
         
         </div>

       </section>

      </div>
    );
  }
  
  export default Events;
  