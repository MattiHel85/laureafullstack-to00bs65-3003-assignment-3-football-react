import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigate() {

  return (
    <>
      <Navbar className='custom-nav'>
        <Container>
          <Navbar.Brand href="/" className='custom-navbrand d-none d-md-block' style={{fontsize: '50px'}}>Teamfinder</Navbar.Brand>
          <Nav>
            <Row>
              <Col xs="4">
                <Nav.Link href="/" className='custom-navlink d-block d-md-none'>Teamfinder</Nav.Link>
              </Col>
              <Col xs="4">
                <Nav.Link href="/allteams" className='custom-navlink'>All teams</Nav.Link>
              </Col>
              <Col xs="4">
                <Nav.Link href="/addteam" className='custom-navlink'>Add team</Nav.Link>
              </Col>
            </Row>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigate