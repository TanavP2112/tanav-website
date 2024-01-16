import React from "react";

function ProjectItem(props) {
  return (
    <>
      <li className='project-item'>
        <img src='' alt='' />
        <div className='project-item-info'>
          <h5 className='project-item-head'>{props.heading}</h5>
          <p className='project-item-txt'>{props.text}</p>
        </div>
      </li>
    </>
  );
}

export default ProjectItem;
