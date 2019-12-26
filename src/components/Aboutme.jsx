import React, { Component } from "react";
import { Container, Col } from "react-bootstrap";
import rk from "../images/ragulan.png";

class Aboutme extends Component {
  render() {
    return (
      <Container id="aboutme-container">
        <h1>About Me</h1>
        <br />
        <img
          id="rk-image"
          src={rk}
          class="rounded-circle img-fluid"
          alt="ragulan"
        />
        <Col>
          <br />
          <p>
            Hey, I'm Ragulan Kodeeswaran. I'm a passionate Software Developer
            interested in Web Development, Cybersecurity, Entrepreneurship, and
            Innovation. Currently, pursuing a Bachelor of Applied Science,
            specializing in Software Engineering at Queen’s University.
          </p>
          <p>
            My Tech Stack: C/C++, Java, C#, HTML, CSS, Javascript, React, Ruby
            On Rails, GraphQL
          </p>
        </Col>
      </Container>
    );
  }
}

export default Aboutme;
