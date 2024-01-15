import React from "react";

function ProjectItem(props) {
  return (
    <>
      <li className='project-item'>
        <img src='' alt='' />
        <div className='project-item-info'>
          <h5 className='card-item-head'>{props.heading}</h5>
          <p className='card-item-txt'>{props.text}</p>
        </div>
      </li>
    </>
  );
}

export default ProjectItem;
