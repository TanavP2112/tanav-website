import React from "react";
import ProjectItem from "./ProjectItem";
import "./Project.css";

function Project() {
  return (
    <div className='project'>
      <h1>Current Project</h1>
      <div className='project-container'>
        <div className='project-wrapper'>
          <ul className='project-items'>
            <ProjectItem
              heading='Classification of Plant Leaves Using Transfer Learning'
              text='This project was my first project with the SIGAIDA group in ACM (Association for Computing Machinery).
               It involved me learning how to use TensorFlow.'
            />
          </ul>
        </div>
      </div>
      <h1>Previous Projects</h1>
    </div>
  );
}

export default Project;
