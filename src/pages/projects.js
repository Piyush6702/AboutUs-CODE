import '../styles/projects.css'
import React,{lazy} from 'react';
const Project = lazy(() => import("../components/project"));
function Projects() {
    return (
      <div className="projects">   
          <Project/>
      </div>
    );
  }
  export default Projects;
  