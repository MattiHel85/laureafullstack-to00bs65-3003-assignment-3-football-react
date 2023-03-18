import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigate() {
  return (
    <Navbar expand="lg" className='custom-nav'>
      <Container fluid>
        <Navbar.Brand href="#" className='custom-navbrand'>Teamfinder</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='custom-navlink'>All teams</Nav.Link>
            <Nav.Link href="#action2" className='custom-navlink'>Add team</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#action1" className='custom-navlink'>All teams</Nav.Link>
            <Nav.Link href="#action2" className='custom-navlink'>Add team</Nav.Link>
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
      </Container>
    </Navbar>
  );
}

export default Navigate