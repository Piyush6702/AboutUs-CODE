import '../styles/discussion.css'
function Discussion() {
   return (
     <div className="discussion">
        <div className="discussionInner">
           {/* <div className="searchQuestion">
             <input className="inputQuestion" type="text" placeholder="Ask  Your Question" required></input>
             <button className="questionAskedButon">Search</button>
           </div> */}
          <div className="discussionBody">
              <div className="questionTags">
              <div className="tags">
                Recent
                </div>
                <div className="tags">
                GATE-CS
                </div>
                <div className="tags">
                General
                </div>
                <div className="tags">
               React
                </div>
                <div className="tags">
               Python
                </div>
                           <div className="tags">
                GATE-CS
                </div>
                <div className="tags">
                General
                </div>
                <div className="tags">
               C#
                </div>
                <div className="tags">
              MongoDB
                </div>
                      
              </div>
              <div className="discussionBox">
                 <div className="discussionCard">
                      <p>
                     #     What is the  use of this Discusion box right now ?
                      </p>
                      <span>
                       ------   Answer can be various type
                      </span>
                      <p><span>Like (2)</span>  <span> Comments (10)</span></p>
                 </div>
                 <div className="discussionCard">
                      <p>
                     #     What is the  things tobe done befoe getting involvd in JS ?
                      </p>
                      <span>
                       ------   Answer can be various type
                      </span>
                      <p><span>Like (2)</span>  <span> Comments (10)</span></p>
                 </div>
              </div>
          </div>
        </div>
     </div>
   );
 }
 
 export default Discussion;
 