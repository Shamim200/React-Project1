import React from "react";
import { Container } from "react-bootstrap";
import Card from "./Card";

import Sdata from "./Data";

const Service = () => {
  return (
    <Container>
      <h2 className="text-center my-5 text-success">My Service</h2>
      <div className="row g-3 p-3">
        {Sdata.map((val, ind) => {
          return <Card key={ind} title={val.title} cardImg={val.cardImg} />;
        })}
      </div>
    </Container>
  );
};

export default Service;
