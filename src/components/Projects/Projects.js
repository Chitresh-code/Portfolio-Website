import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gniot from "../../Assets/Projects/gniot.png";
import emotion from "../../Assets/Projects/emotion.png";
import caseflow from "../../Assets/Projects/codeEditor.png";
import aquafy from "../../Assets/Projects/chatify.png";
import dsa from "../../Assets/Projects/dsa.png";
import stock from "../../Assets/Projects/stock.png";
import twitter from "../../Assets/Projects/twitter.png";

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
              title="Face Recognition Tool"
              description="Developed a user-friendly face recognition tool in Python, enabling training models for specific faces and testing against unknown images. Employed face_recognition library, built usable datasets, and implemented argparse for an intuitive command-line interface, showcasing adaptability and proficiency in image processing."
              ghLink="https://github.com/Chitresh-code/Face-Recognition-Tool/"
              // demoLink="url"      <-------- Demo link here 
            />
          </Col>
        
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Price Prediction"
              description="This project leverages the K-Nearest Neighbors (KNN) algorithm to predict stock prices based on historical data. Stock price prediction is a crucial task in the financial domain, enabling investors to make informed decisions about buying or selling stocks. KNN, a simple yet effective machine learning algorithm, is utilized here due to its intuitive nature and ease of implementation."
              ghLink="https://github.com/Chitresh-code/Stock-Price-Prediction-using-KNN"
              // demoLink="url"      <-------- Demo link here               
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Sentiment Analysis Using ML"
              description="This project performs sentiment analysis on Twitter data using a dataset of 1.6 million tweets sourced from Kaggle. The sentiment of each tweet is labeled as either negative (0) or positive (1). The analysis involves preprocessing the text data, including removing stopwords, stemming, and vectorization. The dataset is then split into training and testing data, and a logistic regression model is trained to classify the sentiment of tweets."
              ghLink="https://github.com/Chitresh-code/Twitter-Sentiment-Analysis"
              demoLink="https://chitresh-g-sentiment-analysis.hf.space"              
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
              description="A website that tracks the completion status of Google Cloud Computing Foundation Course and GenAI Arcade Game of students studying in GNIOT, it is a website to help GDSC-GNIOT to track and help students to complete their Google Cloud Courses for the Google Cloud Study Jams 2023 [Cohort-1]"
              ghLink="https://github.com/Chitresh-code/GDSC-GNIOT-Completion-Tracker"
              demoLink="https://cloud-student-tracker.web.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dsa}
              isBlog={false}
              title="DSA Worksheet"
              description="It is a GitHub Repository for Hacktoberfest where we post daily issues (DSA Questions) and students are allowed to solve those questions and merge their PRs as to get started with Hacktoberfest and learn to contribute in open source. It was made and maintained in Collaboration with GDSC-GNIOT."
              ghLink="https://github.com/Chitresh-code/DSA_Worksheet"
              // demoLink="url"      <-------- Demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
