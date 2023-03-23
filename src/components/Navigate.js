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
    <>
    <Navbar className='custom-nav'>
      <Container>
        <Navbar.Brand href="/" className='custom-navbrand d-none d-md-block' style={{fontsize: '50px'}}>Teamfinder</Navbar.Brand>
        <Nav>
          <Nav.Link href="/" className='custom-navlink d-block d-md-none'>Home</Nav.Link>
          <Nav.Link href="/allteams" className='custom-navlink'>All teams</Nav.Link>
          <Nav.Link href="/addteam" className='custom-navlink'>Add team</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigate