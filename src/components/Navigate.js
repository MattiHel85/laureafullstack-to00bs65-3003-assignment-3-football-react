import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigate({teams}) {
  const joukkueet = teams
  console.log(`${teams} sent from search auto`)
  const searchTeamFunction = () => {
    console.log(`${joukkueet} sent from search`)
  }
  return (
    <Navbar expand="lg" className='custom-nav'>
      <Container>
        <Row style={{width: "100%"}}>
          <Col xs="6">
            <Navbar.Brand href="/" className='custom-navbrand' >Teamfinder</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className='m-0'/>
          </Col>
          <Col xs="6">
            <Navbar.Collapse id="navbarScroll" className='custom-nav-collapse'>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/allteams" className='custom-navlink'>All teams</Nav.Link>
                <Nav.Link href="/addteam" className='custom-navlink'>Add team</Nav.Link>
              </Nav>
              <Form className="d-xs-block-flex d-md-inline-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline" className='custom-btn-light' onClick={searchTeamFunction}>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Navigate