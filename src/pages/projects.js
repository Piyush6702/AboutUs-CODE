import '../styles/projects.css'
import React,{lazy} from 'react';
const Project = lazy(() => import("../components/project"));
function Projects() {
    return (
      <div className="projects">
        <h1>
          Projects  
        </h1>
         <section>
         
          <Project/>
        </section>
      </div>
    );
  }
  export default Projects;
  