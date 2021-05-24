import development from '../assets/development.svg'
import '../styles/founder.css'
function Founder() {
    return (
      <div >
             <section className="role">
              <h1>
                 Founders
              </h1>
          <div  className="cardsFoundingMemberDiv" >
            <div  className="cardFounder">
                <img src={development} className="imagesFounder"  alt="devSvg"></img>
                <>
                      <div className="FounderTitle"> Ritsh Rai</div>  
                      <div className="FounderDesc">
                       CEO | CTO 
                       <li>
                  <a href="https://www.linkedin.com/company/codebiet/"rel="noreferrer"  target="_blank">Linkedin</a>
              </li>
                      </div>      
                      </>
            </div>
            <div  className="cardFounder">
            <img src={development} className="imagesFounder" rel="noreferrer"  alt="devSvg"></img>
                <>
                 <div className="FounderTitle"> Samarth Agrawal 
                 </div>
                 <div className="FounderDesc">
                       CEO | Analyst 
                    <li>
                        <a href="https://www.linkedin.com/company/codebiet/" rel="noreferrer" target="_blank">Linkedin</a>
                    </li>
                 </div>
                  
                      </>
            </div>
            <div  className="cardFounder">
            <img src={development} className="imagesFounder"  alt="devSvg"></img>
                <>
                      <div className="FounderTitle"> Rajat Saxena   </div>
                      <div className="FounderDesc">
                       CEO | HR 
                      <li>
                  <a href="https://www.linkedin.com/company/codebiet/" target="_blank" rel="noreferrer" >Linkedin</a>
              </li>
              
                      </div>   
                      <div>
                
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
  