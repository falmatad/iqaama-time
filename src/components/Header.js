import React from "react";
import "./Header.css";
import moment from "moment";
import Moment from "react-moment";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
const timeFormat = "DD/MM/YYYY hh:mm:ss";

class Header extends React.Component {
  state = {
    
  };

  

  render() {
    
    return (
      <Jumbotron className="jumbo mb-0 rounded-0">
        <Container className="content">
          <Row noGutters>
            
            <Col>
              <h1>
                <small className="text-muted">It's</small> Zuhr
                <small className="text-muted"> time</small>
              </h1>
              <p className="font-italic">
                Time Until - Asr 
                2 hours 30 mins 55 seconds
              </p>
              
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Header;
