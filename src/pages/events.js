import '../styles/events.css'
import svg from '../assets/SVG.svg';

function Events() {
    return (
      <div className="events">
        
       <section className="eventsOuter"> 
         <div className="eventsWrapper">
          
           <div className="eventsSubCategory  ">
          <a href="#" className="tab" selected>
           Current
          </a>
          <a href="#"className="tab"> Upcoming</a>
          <a href="#" className="tab">Recently closed</a>
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
  