import React from "react";

import { Container } from "react-bootstrap";

import about from "../assets/images/1.jpg";
import Common from "./Common";

const About = () => {
  return (
    <Container>
      <Common
        imgsrc={about}
        contactus="/service"
        btnName="My Service"
        heading2="About Me"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, harum cumque inventore atque iusto unde officiis quia quam, incidunt vel quod obcaecati consequatur voluptas fuga libero beatae praesentium magnam fugiat?"
      />
    </Container>
  );
};

export default About;
