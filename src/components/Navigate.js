import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigate() {
  return (
    <Navbar expand="lg" className='custom-nav'>
      <Container fluid>
        <div className='d-flex justify-content-start'>
          <Navbar.Brand href="/" className='custom-navbrand'>Teamfinder</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"/>
        </div>
        <div className='d-flex justify-content-end'>
          <Navbar.Collapse id="navbarScroll" className='custom-nav-collapse'>
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link href="/allteams" className='custom-navlink'>All teams</Nav.Link>
              <Nav.Link href="/addteam" className='custom-navlink'>Add team</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline" className='custom-btn-light'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigate