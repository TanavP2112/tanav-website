import React from "react";
import ProjectItem from "./ProjectItem";

function Project() {
  return (
    <div className='project'>
      <h1>Current Project</h1>
      <div className='project-container'>
        <div className='project-wrapper'>
          <ul className='project-items'>
            <ProjectItem
              heading='Classification of Plant Leaves Using Transfer Learning'
              text='hello'
            />
          </ul>
        </div>
      </div>
      <h1>Previous Projects</h1>
    </div>
  );
}

export default Project;
