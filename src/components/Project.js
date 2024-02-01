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
               It involved me learning how to use TensorFlow. Future plans with this project involve recreating the project using PyTorch.'
            />
          </ul>
        </div>
      </div>
      <h1>Previous Projects</h1>
      <div className='project-container'>
        <div className='project-wrapper'>
          <ul className='project-items'>
            <ProjectItem
              heading='Zipline Delivery App'
              text='This project was done during my Summer 2023 internship with Zipline, a delivery startup. The project was created using Flutter and Dart,
               utilizing Firebase for the backend.'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
