import development from '../assets/development.svg'
import '../styles/founder.css'
function Founder() {
    return (
      <div >
             <section className="role">
              <h3>
                  Founding Mmebers
              </h3>
          <div  className="cardsFoundingMemberDiv" >
            <div  className="cardFounder">
                <img src={development} className="imagesFounedr"  alt="devSvg"></img>
                <>
                      <div className="FounderTitle"> Ritsh Rai  </div>
                      <div className="FounderDesc">
                       CEO & CTO 
                      </div>
                      
                      </>
            </div>
            <div  className="cardFounder">
            <img src={development} className="imagesFounedr"  alt="devSvg"></img>
                <>
                      <div className="FounderTitle"> Samarth Agrawal </div>
                      <div className="FounderDesc">
                       CEO ,Analyst 
                      </div>
                     
                      </>
            </div>
            <div  className="cardFounder">
            <img src={development} className="imagesFounedr"  alt="devSvg"></img>
                <>
                      <div className="FounderTitle"> Rajat Saxena  </div>
                      <div className="FounderDesc">
                       CEO ,HR 
                      </div>           
                      </>
            </div>
              <div>

              </div>
                 </div>
          </section>
         
      </div>
    );
  }
  
  export default Founder;
  