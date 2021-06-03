import '../styles/about.css'
 import img from'../assets/goal.svg';
function Mission() {
    return (
      <div className="aboutCODE">
           <h1>
                 Our Goal
         </h1>
          <section>
            
              <div className="aboutHead ">
          <p>
         "" Club Of Developers’ mission is to create a better learning and collaborative atmosphere in the campus where they can learn and explore new technologies and can enhance their skills ""
          </p>
              </div>
              <div className="aboutImage">
                  <img src={img} alt="s" className="aboutImg"></img>
              </div>
          </section>
      </div>
    );
  }
  
  export default Mission;
  