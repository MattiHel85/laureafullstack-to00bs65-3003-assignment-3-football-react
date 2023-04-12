import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchFunction from "./SearchFunction";


function Navigate() {  
  // const navigate = useNavigate();
  // const [teams, setTeams ] = useState([]);
  // const [search, setSearch] = useState('')
  // const [teamsForSearch, setTeamsForSearch] = useState([])
  // const [searchedTeam, setSearchedTeam] = useState()

  // useEffect(() => {
  //   const fetchTeams = async () => {
  //     const response = await fetch('https://football-teams-rest-api-assignment.onrender.com/api/getall')
  //     const jsonData = await response.json()
  //     const data = jsonData.sort((a, b) => a.name.localeCompare(b.name))
  //     setTeams(data)
  //   }
  //   fetchTeams()
  // }, [])

  // const teamSearch = (e) => {
  //   e.preventDefault()
  //   setSearchedTeam(search);
  //   setTeamsForSearch(teams)

  //   search !== null ? teamsForSearch.map((team) => 
  //   {
  //       team.name.toLowerCase() === search.toLowerCase() ? 
  //       navigate(`/team/${team._id}`) : alert("Team not found")
  //   }) : setSearch('')


  //   setSearch('')
  // }
  


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
            </Nav>
            {/* <SearchFunction /> */}
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Find team"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button className="custom-btn" onClick={teamSearch}>Search</Button>
          </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigate