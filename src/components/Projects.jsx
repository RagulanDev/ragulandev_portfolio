import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import calorify from "../images/calorify.jpeg";
import qface from "../images/logo2.png";
import qecovec from "../images/q-eco-vechicle.jpg";

class Projects extends Component {
  render() {
    return (
      <Container id="projects-container">
        <h1>Projects</h1>
        <br />
        <Card>
          <Card.Img variant="top" src={calorify} />
          <Card.Body>
            <Card.Title>Calorify</Card.Title>
            <Card.Text>
              Web/Mobile Application - Estimate the number of calories and
              nutrients from a taken image of a food item
            </Card.Text>
            <Button
              variant="outline-secondary"
              href="https://github.com/RagulanDev/Calorify"
              target="_blank"
            >
              View Project
            </Button>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Img variant="top" src={qface} />
          <Card.Body>
            <Card.Title>QFace</Card.Title>
            <Card.Text>
              An openCV and LokiJS/IndexedDB powered facial recognition web app
              written in C++
            </Card.Text>
            <Button
              variant="outline-secondary"
              href="https://github.com/RagulanDev/QFace"
              target="_blank"
            >
              View Project
            </Button>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Img variant="top" src={qecovec} />
          <Card.Body>
            <Card.Title>Auto Throttle Project</Card.Title>
            <Card.Text>
              Auto Throttle Project to optimize fuel consumption within the
              vechicle written in Arduino
            </Card.Text>
            <Button
              variant="outline-secondary"
              href="https://github.com/RagulanDev/AutoThrottle_Code"
              target="_blank"
            >
              View Project
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Projects;
