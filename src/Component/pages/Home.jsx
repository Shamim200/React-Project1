import React from "react";

import { Container } from "react-bootstrap";
import Common from "./Common";

import web from "../assets/images/2.png";

function Home() {
  return (
    <Container>
      <Common
        imgsrc={web}
        heading1="Hello and welcome to My"
        heading2="Creative Portfolio"
        contactus="/contact"
        btnName="Contact Us"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur harum tempore, quos repudiandae neque illo, sequi minima a suscipit voluptatum cum, maiores laudantium reprehenderit illum quod nostrum laboriosam dolores sed."
      />
    </Container>
  );
}

export default Home;
