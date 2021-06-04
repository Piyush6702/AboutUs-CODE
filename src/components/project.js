import "../styles/projects.css";
import img from "../assets/projectHead.svg";
function Project() {
  return (
    <div className="project">
      <div className="projectOuter">
      
        <section className="projectSection">
          <div className="aboutHead "> 
          <h1>
            Glimpse of our work
          </h1>
            <p>
              "" Club Of Developers’ mission is to create a better learning and
              collaborative atmosphere in the campus where they can learn and
              explore new technologies and can enhance their skills ""
            </p>
          </div>
          <div className="aboutImage">
            <img src={img} alt="s" className="aboutImg"></img>
          </div>
        </section>
             <section className="projectSection sortingProjects">
       
          <div className="inputFilterTech">
         
          <input list="technologyList" type="text" placeholder="Technology"></input>
                 <datalist id="technologyList">
                   <option value="Html"/>
                   <option value="Css"/>
                   <option value="Js"/>
                 </datalist>
                
          </div>
          <div className="inputFilterName">
            <input type="text" placeholder="Developer"></input>
          </div>
          <div className="inputFilterStar">
          <button >Search</button>
          </div>
        </section>
        <div className="projectsCards">
          <div className="projectCard">
            <div className="projectThumbnail">
            <div className="rating">
              ⭐⭐⭐
              </div>
              <img src={img} className="imagesFounder" alt="devSvg"></img>
            </div>
          
            <div className="projectDetails">
              Mario Forever <br></br>
              <div className="projectDesc">
                A Ml learning project drives and handles the proper guidance
              </div>
              <div className="pojectDeveloper">
                -Ryan Parag
                <span> ,third year,CSE</span>
              </div>
               
                <a className="developerTabs"
                  href="https://www.linkedin.com/company/codebiet/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a className="developerTabs"
                  href="https://www.linkedin.com/company/codebiet/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a>
             
            </div>
          </div>
          <div className="projectCard">
            <div className="projectThumbnail">
              <div className="rating">
              ⭐⭐⭐
              </div>
              <img src={img} className="imagesFounder" alt="devSvg"></img>
            </div>
          
            <div className="projectDetails">
              Mario Forever <br></br>
              <div className="projectDesc">
                A Ml learning project drives and handles the proper guidance
              </div>
              <div className="pojectDeveloper">
                -Ryan Parag
                <span> ,third year,CSE</span>
              </div>
              
                <a className="developerTabs"
                  href="https://www.linkedin.com/company/codebiet/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a className="developerTabs"
                  href="https://www.linkedin.com/company/codebiet/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a>
                <span className="rateProject">
                  Rate it
                </span>
            </div >
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
