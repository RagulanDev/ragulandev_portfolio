import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import hiRagu from "../images/hiragu.png";

class Contact extends Component {
  render() {
    return (
      <div>
        <Container id="contact-container">
          <h1>Contact Me</h1>
          <br />
          <Row>
            <Col>
              <img
                id="hiRagu-image"
                src={hiRagu}
                class="img-fluid"
                alt="ragulan"
              />
              <form>
                <ul class="flex-outer">
                  <li>
                    <label for="full-name">Full Name</label>
                    <input
                      type="text"
                      id="full-name"
                      placeholder="Your full name..."
                    />
                  </li>
                  <li>
                    <label for="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email..."
                    />
                  </li>
                  <li>
                    <label for="message">Message</label>
                    <textarea
                      rows="6"
                      id="message"
                      placeholder="Enter your message here..."
                    ></textarea>
                  </li>
                  <button type="submit" disabled>
                    Coming Soon!
                  </button>
                </ul>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
