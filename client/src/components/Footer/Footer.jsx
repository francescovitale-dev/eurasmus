// Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6} sm={12} className="text-center">
            <h3>About Us</h3>
            <p>
              We're a bunch of finance
              enthusiasts who are also passionate about parties! 🎉 <br />
              We're here to make managing your finances as enjoyable as hitting
              the dance floor at the hottest Erasmus Fiestas. With our platform,
              you'll find the tools and guidance you need to take charge of your
              money and have a blast while doing it. <br />
              Join us as we turn budgeting into a party!
            </p>
          </Col>
          <Col md={6} sm={12} className="text-center">
            <div>
              <h3>Contact Us</h3>
              <p>
                Email: info@eurasmus.com <br />
                Phone: +1 555-555-5555
              </p>
              <h3>Follow Us</h3>
            </div>
            <div>
              <ul className="social-icons">
                <li>
                  <a href="https://www.vitalefrancesco.com/" target="_blank">
                    <i className="bi bi-link"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/francesco-vitale--/" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/francescovitale-dev" target="_blank">
                    <i className="bi bi-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} sm={12}></Col>
        </Row>
        <hr className="divider" />
        <p className="text-center">
          &copy; 2024 Eurasmus. All rights reserved. <br /> Created by <a className="personal-link" href="https://vitalefrancesco.com" target="_blank">Francesco Vitale</a>.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
