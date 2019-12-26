import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

class Resume extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Resume</h1>
          <div id="resume-container">
            <h2>Ragulan Kodeeswaran</h2>
            <h6>Software Engineering Student @ Queen's University</h6>
            <hr />
            <Row>
              <Col sm={8}>
                <h4>Work Experience</h4>
                <hr className="hr-styling" />
                <p>
                  <strong>MDA Corporation, Brampton, ON</strong>
                  <br />
                  Student Intern - Software Engineering
                  <br />
                  <li>
                    Re-implemented a custom 3ds Max Plugin to work with latest
                    3ds Max C++ API, for creating multi-body contact models for
                    operational analysis for both Canadarm2 and Dextre
                    operations
                    <br />
                    Tech Stack: C++, MAXScript, Autodesk 3ds Max, Visual Studio
                  </li>
                  <li>
                    Developed an application to compile robotic scripts into
                    machine code to run on the Mobile Servicing Systems
                    Application Computer(MSS), programmed in C# with Microsoft
                    Visual Studio, and unit tested using MSTest
                    <br />
                    Tech Stack: C#, VBScript, SQL, XML, MSTest, Microsoft
                    Access, Visual Studio
                  </li>
                  <li>
                    Written and automated tests for software validation and
                    verification on a real-time operating system
                    <br />
                    Tech Stack: QNX, Unix, Bash, Perl
                  </li>
                </p>
                <br />

                <h4>Software Projects</h4>
                <hr />
                <p>
                  <strong>
                    Calorify — Calorie Consumption Estimator
                    Web/Mobile-Application
                  </strong>
                  <br />
                  Oct 2019
                  <br />
                  <li>
                    Created a web/mobile application to estimate the amount of
                    calories and nutrients of a food item using image processing
                    techniques
                    <br />
                    Utilized: React, Bootstrap, Node.js, Python, OpenCV
                    (Open-Source Computer Vision Library)
                  </li>
                  <br />
                  <strong>QFace — Facial Recognition Web-Application</strong>
                  <br />
                  Oct 2017 - Dec 2017
                  <br />
                  <li>
                    Designed and implemented Facial Recognition Web Application
                    <br />
                    Utilized: C++, Emscripton and OpenCV (Open-Source Computer
                    Vision Library)
                  </li>
                  <br />
                  <strong>
                    Personal Portfolio Website — Web Development Project
                  </strong>
                  <br />
                  Sept 2017 - Present <br />
                  <li>
                    Developed Portfolio Website showcasing my past experiences
                    and providing contact information for future collaborations{" "}
                    <br />
                    Utilized: Full Stack Web Development, JavaScript, React,
                    Bootstrap and debugged with Chrome Developer Tools
                  </li>
                </p>
              </Col>
              <Col sm={4}>
                <h4>Education</h4>
                <hr />
                <p>
                  <strong>Queen's University, Kingston, ON </strong>
                  <br />
                  Bachelor of Applied Science (B.A.Sc), Computer Engineering,
                  with Professional Internship <br /> September 2015 - Present
                </p>
                <h4>Techical Skills</h4>
                <hr />
                <p>
                  C++, C#, Java, HTML, CSS, JavaScript, Ruby, Lua, MySQL,
                  Access, PHP, Bash, React-Apollo, Ruby on Rails, GraphQL,
                  jQuery, OpenCV, Git, SVN, Jira, Confluence
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Resume;
