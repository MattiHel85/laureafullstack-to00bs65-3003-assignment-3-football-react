import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigate() {



  return (
    <Navbar expand="lg" className='custom-nav'>
      <Container>
        <Row style={{width: "100%"}}>
          {/* <Col xs="6"> */}
            <Navbar.Brand href="/" className='custom-navbrand' >Teamfinder</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="navbarScroll" className='m-0'/> */}
            <Nav>
                <Nav.Link href="/allteams" className='custom-navlink'>All teams</Nav.Link>
                <Nav.Link href="/addteam" className='custom-navlink'>Add team</Nav.Link>
            </Nav>
          {/* </Col> */}
          <Col xs="6">
          
            {/* <Navbar.Collapse id="navbarScroll" className='custom-nav-collapse'>
              
            </Navbar.Collapse> */}
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Navigate