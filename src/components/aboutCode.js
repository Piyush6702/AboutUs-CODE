import '../styles/about.css'
import img from'../assets/aboutImage.jpg';
function AboutCode() {
    return (
      <div className="mission">
          <section>

             <h1>
                About C.O.D.E
             </h1>
        <div className="aboutImage">
          <img src={img} alt="about-us" className="aboutImg"></img>
        </div>
              <div>
          <p>
        About C.O.D.E

         C O D E is club of developers , by developers and for the developers. It also contains college study behaviour ,GATE preparation focused From Competitive to College Subjects , Guidance to collaboration in projects, Hiring to Learning .CODDE
         tries to remove the obstacles that hinders BIETian to prove themselves on bigger platform
          </p>
          
              </div>
          </section>
         
      </div>
    );
  }
  
  export default AboutCode;
  