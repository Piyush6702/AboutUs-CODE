 import '../styles/testimonials.css'
 import img from'../assets/SVG.svg';
function Testimonials() {
    return (
      <div className="testomialsDiv">
       

          <h2>
        " What other say about C.O.D.E "
        </h2>

          <div className="testimonialInnerDiv">
            <div className="testimonialsCard">A womderful platform for the studnets who have joined the college just now.It is increasing
             among freshers as well who are looing for interns from BIET
             <div className="writerDiv">
                 <div className="writerImageDiv">
                         <img src= {img} alt =" Witer" className="writerImage">
                         </img>
                 </div>
                 <div className="writerDesc">
                     <span>
                         --Rajesh Kanaujia
                     </span>
                     <br></br>

                         @Taks
                     
                 </div>
            </div> 
         </div>
            <div className="testimonialsCard"> A womderful platform for the studnets who have joined the college just now.It is increasing
             among freshers as well who are looing for interns from BIET
             <div className="writerDiv">
                 <div className="writerImageDiv">
                         <img src= {img} alt ="  Witer" className="writerImage">
                         </img>
                 </div>
                 <div className="writerDesc">
                     <span>
                         --Rajesh Kanaujia
                     </span>
                     <br></br>
                     
                         @Taks
                     
                 </div>
            </div> 
             </div>
            <div className="testimonialsCard"> A womderful platform for the studnets who have joined th college just now.It is increasing among freshers as well who are looing for interns from BIET
           
           
            <div className="writerDiv">
                 <div className="writerImageDiv">
                         <img src= {img} alt =" Witer" className="writerImage">
                         </img>
                 </div>
                 <div className="writerDesc">
                     <span>
                         --Rajesh Kanaujia
                     </span>
                     <br></br>
                     
                         @Taks
                     
                 </div>
            </div>  </div>

          </div>
 

      </div>
    );
  }
  
  export default Testimonials;
  