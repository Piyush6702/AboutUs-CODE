import development from '../assets/development.svg'
import '../styles/founder.css'
function Founder() {
    return (
      <div >
             <section className="role">
              <h3>
                  Pioneers
              </h3>
          <div  className="cardsFoundingMemberDiv" >
            <div  className="cardFounder">
                <img src={development} className="imagesFounedr"  alt="devSvg"></img>
                <>
                      <div className="FounderTitle"> Ritsh Rai  </div>
                      <div className="FounderDesc">
                       CEO & CTO 
                      </div>
                      <div>
                          @ld
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
                      <div>
                         @Ld
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
                      <div>
                      @Ld
                      </div>
                      </>
            </div>
           
            <div  className="cardFounder">
            <img src={development} className="imagesFounedr"  alt="devSvg"></img>
                <>
                      <div className="FounderTitle"> Tanu Agrawal  </div>
                      <div className="FounderDesc">
                      Executive Founder
                      </div>
                     
                      </>
            </div>
            <div  className="cardFounder">
            <img src={development} className="imagesFounedr"  alt="devSvg"></img>
                <>
                      <div className="FounderTitle"> Vipin Gautam  </div>
                      <div className="FounderDesc">
                      Executive Founder
                      </div>
                      
                      </>
            </div>
            <div  className="cardFounder">
            <img src={development} className="imagesFounedr"  alt="devSvg"></img>
                <>
                      <div className="FounderTitle"> Manal Jain  </div>
                      <div className="FounderDesc">
                       Executive Founder
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
  