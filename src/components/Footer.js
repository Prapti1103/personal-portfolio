import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.png';
import navIcon5 from '../assets/img/nav-icon5.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          <h2  >Prapti Mangade</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="www.linkedin.com/in/
prapti-mangade1103
"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Prapti1103"><img src={navIcon4} alt="" /></a>
                <a href="praptimangade@gmail.com"><img src={navIcon5} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/prapti_1103/"><img src={navIcon3} alt="" /></a>
                
              </div>
            <p> @praptimangade Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
