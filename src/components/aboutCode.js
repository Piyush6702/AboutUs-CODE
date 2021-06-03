import '../styles/about.css'
import img from'../assets/about.svg';
function AboutCode() {
    return (
      <div className="aboutCODE">
         
  <section>
            
        <div className="aboutImage">
          <img src={img} alt="about-us" className="aboutImg"></img>
        </div>
        <div className="aboutHead">
        <h1>About C.O.D.E</h1>
          <p>
         ""Club of Developers is an initiative of The Department of Computer Science & Engineering, BIET Jhansi""
         <br></br>
         <br></br> CODE  aims to establish a coding culture on campus, reaching every student passionate about development.
         <br></br> 
         <br></br>The club's motto is to Learn-Build-Innovate.    </p>
        </div>
  </section>
       
      </div>
    );
  }
  
  export default AboutCode;
  