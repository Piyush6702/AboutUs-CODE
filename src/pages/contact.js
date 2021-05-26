 
import '../styles/newsletter.css';
import '../styles/contact.css';
import React, {lazy}from 'react';
const Social= lazy(()=>import("../components/social"));
 
function Contact() {
    return (
      <div className="contact">
          
<section className="newsletterSection">
 
       <div className="newsLetter">
       
       <div className="newLetterInputDiv">
          <div className="contactDetails">
            
              <div className="contactDetailsInner">
             <h2>
               Contact Details
             </h2>
             <div className="codeAddress">
               Permanent Address
               <p>KochaBhawar BIET,Jhansi</p>
             </div>
             <div className="codeAddress">
               Call us
               <p>981181 , 88885455</p>
             </div>
             <div className="codeAddress">
               Mail us
               <p>gauti@123unplaced.com </p>
             </div>
             
              </div>
       </div>
       <div>
         
       </div>
       <div>

       <form>
           
           <input type="text" required placeholder="First Name*"></input>
           <input type="email"  required  placeholder="Enter your email"></input>
           <input type="number" required placeholder="Contact no."></input>
           <input type="text" required placeholder="Type your message here*" className="textareaContactDetails"></input>
      
      
     <button type="submit " className="buttonNewsletter">Send message</button>
  </form>
       </div>
        </div>
        <br></br>
      <span>
      Don't worry, no spam here! Your information will only be used for C.O.D.E and Chrome related updates<br></br> and our emails 
      are typically no more than 1-2 times a month. You can unsubscribe anytime.
      </span>
      <br></br>
</div>
    
        </section>
        <Social/>
      </div>
    );
  }
  
  export default Contact;
  