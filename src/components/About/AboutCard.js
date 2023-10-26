import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chitresh Gyanani </span>
            from <span className="purple"> New Delhi, India.</span>
            <br /> I am a pre-final year student pursuing B. Tech. in 
            <br /> Computer Science and Engineering at AKTU (GNIOT).
            <br />
            Additionally, I am currently the Joint Seceretary in GDSC-GNIOT.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Public Speaking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learn and Grow until you make a difference."{" "}
          </p>
          <footer className="blockquote-footer">Chitresh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
