import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import Typed from "react-typed";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <div id="typed_banner">
            <Typed strings={["Software"]} typeSpeed={50} showCursor={false} />
            <br />
            <Typed
              strings={["Developer."]}
              typeSpeed={50}
              startDelay={700}
              showCursor={true}
            />
            <br />
            <Button
              id="hireMeButton"
              href="mailto:ragulan.kodeeswaran@gmail.com"
            >
              Hire Me Today
            </Button>
            <Button
              id="viewResumeButton"
              target="_blank"
              href="https://drive.google.com/open?id=1hCvIbBz0m3WCRfXT-X2Ljo9tU7K0GsTB"
            >
              View Resume
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default LandingPage;
