import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

function Card() {
  return (
    <div className='cards'>
      <h1>Current Project</h1>
      <div className='card-container'>
        <div className='card-wrapper'>
          <ul className='card-items'>
            <CardItem
              src='images/LeavesSwedish.png'
              heading='Classification of Plant Leaves Using Transfer Learning'
              text='This is a project using PyTorch.'
              label='Deep Learning'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
