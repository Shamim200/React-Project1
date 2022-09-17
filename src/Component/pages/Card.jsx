import React from "react";
// import {Link} from 'react-router-dom';
const Card = (props) => {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="card">
        <img
          src={props.cardImg}
          className="card-img-top"
          alt=""
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <div className="card-title">{props.title}</div>
          <div className="card-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              laboriosam, corrupti, debitis sed ratione dolor iste.
            </p>
          </div>
          <button className="btn btn-outline-warning">Click Me</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
