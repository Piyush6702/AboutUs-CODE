 import '../styles/nav.css'
 import  error from '../assets/error.svg'
function Error404() {
    return (
      <div className="error404">
         <div className="erro404Inner">

         <img src={error} alt ="404 error"></img>
 
         </div>
      </div>
    );
  }
  
  export default Error404;
  