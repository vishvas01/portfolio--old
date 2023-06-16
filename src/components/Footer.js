import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
              <a href="https://github.com/vishvas01"><img src={navIcon2}  alt="Icon" /></a>
              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vishvas-patel-6834781a0/"><img src={navIcon1}  alt="Icon" /></a>
              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <p>	&#169;vishvas. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
