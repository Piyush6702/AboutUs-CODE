import '../styles/about.css'
 
import '../styles/newsletter.css';
 
function Contact() {
    return (
      <div className="contact">
          
<section className="newsletterSection">
<h1>
    Contact Us
</h1>
<div className="newsLetter">
           <div>
           <h1>
              
           </h1>
           <p>
        Get in touch with us in no time
           </p>
         </div>
       
       <div className="newLetterInputDiv">
      <form>
          <div className="userDetailsNewsletter">
               <input type="text" required placeholder="First Name"></input>
               <input type="text" required placeholder="Last Name   "></input>
          </div>
          <div className="emailOuterDiv">
          <input type="email"  required   placeholder="Enter your email"></input>
          </div>
     
      <br></br>
      <span>
      Don't worry, no spam here! Your information will only be used for C.O.D.E and Chrome related updates and our emails 
      are typically no more than 1-2 times a month. You can unsubscribe anytime.
      </span>
      <br></br>
         <button type="submit " className="buttonNewsletter">Let's Connect</button>
      </form>
     
     </div>
</div>
    
        </section>
      </div>
    );
  }
  
  export default Contact;
  