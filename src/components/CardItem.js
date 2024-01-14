import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className='card-item'>
        <Link className='card-item-link' to={props.path}>
          <figure className='card-item-container' data-category={props.label}>
            <img
              src={props.src}
              alt='Current Project'
              className='card-item-img'
            />
          </figure>
          <div className='card-item-info'>
            <h5 className='card-item-head'>{props.heading}</h5>
            <p className='card-item-txt'>{props.text}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
