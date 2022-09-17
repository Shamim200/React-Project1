import React from "react";
import { Link } from "react-router-dom";
const Common = (props) => {
  return (
    <section>
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-lg-6 col-md-5 my-md-3">
          <h2 className="text-danger heading">
            {props.heading1}
            <br />
            <span className="text-info">{props.heading2}</span>
          </h2>
          <br />
          <p>{props.para}</p>
          <br />
          <Link to={props.contactus} className="btn btn-outline-success">
            {props.btnName}
          </Link>
        </div>
        <div className="col-lg-6 col-md-7 images">
          <img src={props.imgsrc} className="img-fluid" alt="web site images" />
        </div>
      </div>
    </section>
  );
};

export default Common;
