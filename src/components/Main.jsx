import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import LandingPage from "./LandingPage";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar id="main-navbar" expand="lg">
          <Navbar.Brand id="brand" href="/">
            Ragulan Kodeeswaran
          </Navbar.Brand>
          <Navbar.Toggle id="toggler" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/aboutme">About Me</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/projects">Projects</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/resume">Resume</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/aboutme">
            <Aboutme />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
