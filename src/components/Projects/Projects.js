import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gniot from "../../Assets/Projects/gniot.png";
import emotion from "../../Assets/Projects/emotion.png";
import caseflow from "../../Assets/Projects/codeEditor.png";
import aquafy from "../../Assets/Projects/chatify.png";
import dsa from "../../Assets/Projects/dsa.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition Software"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Chitresh-code/Face-Recognition-Tool/"
              // demoLink="url"      <-------- Demo link here 
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={caseflow}
              isBlog={false}
              title="CaseFlow"
              description="A project selected for Smart India Hackathon on Problem Statement: Development of e-Portal for facilitating Case Management Hearing of various types of cases. We are trying to make a secure portal for hearing of pre trial confrence equiped with AI and Cybersecurity. From filing reports to hearings to finally making and reading of reports for your cases will be on a single website."
              ghLink="https://github.com/Chitresh-code/CaseFlow"
              // demoLink="url"      <-------- Demo link here               
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aquafy}
              isBlog={false}
              title="Aquafy"
              description="A project I made for Google Solution Challange, it is based on the United Nations Sustainable Development Goals: Clean Water and Sanitisation. In this app we used Google Maps API to locate and target the clean and fresh water sources around the whole country which can be located and accesed through this app."
              ghLink="https://github.com/Chitresh-code/Aquafy"
              // demoLink="url"      <-------- Demo link here 
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gniot}
              isBlog={false}
              title="[GDSC-GNIOT] Study Jams Completion Tracker"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Chitresh-code/GDSC-GNIOT-Completion-Tracker"
              demoLink="https://cloud-student-tracker.web.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dsa}
              isBlog={false}
              title="DSA Worksheet"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Chitresh-code/DSA_Worksheet"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
