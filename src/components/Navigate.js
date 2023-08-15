import React  from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigate() {  


  return (
    <>
      <Navbar sticky="top" className='custom-nav mb-5' expand="lg">
        <Container>
          <Navbar.Brand className='p-3 m-2 custom-navbrand d-none d-md-inline-block'>Tf</Navbar.Brand>
          <Nav.Link className='p-3 m-2 custom-navbrand-sm d-inline-block d-md-none'>Tf</Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '150px' }}
              navbarScroll
            >
              <Nav.Link href="/" className='custom-navlink'>Home</Nav.Link>
              <Nav.Link href="/allteams" className='custom-navlink'>View teams</Nav.Link>
              <Nav.Link href="/addteam" className='custom-navlink' >Add team</Nav.Link>
              <Nav.Link href="/signup" className='custom-navlink' >Sign up</Nav.Link>
              <Nav.Link href="/signin" className='custom-navlink' >Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigate