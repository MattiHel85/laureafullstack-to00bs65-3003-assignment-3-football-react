import React, { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigate from "./Navigate";
import Footer from "./Footer"


function UpdateTeam() {
    const [team, setTeam ] = useState({});
    const [badgeUrl, setBadgeUrl ] = useState();
    const [name, setName ] = useState();
    const [nickname, setNickname ] = useState();
    const [founded, setFounded ] = useState();
    const [groundName, setGroundName ] = useState();
    const [groundCapacity, setGroundCapacity ] = useState();
    const [country, setCountry ] = useState();
    const [league, setLeague ] = useState();
    const [coach, setCoach ] = useState();

    const navigate = useNavigate();
    const { id } = useParams();   
    
    const fetchTeam = async () => {
        const response = await fetch(`https://football-teams-rest-api-assignment.onrender.com/api/${id}`)
        const data = await response.json()
        setTeam(data)
      }

    useEffect(() => {
        fetchTeam()
      }, [])

    const updateData = (e) => {
        e.preventDefault()
        const team = {badgeUrl, name, nickname, founded, groundName, groundCapacity, country, league, coach}

        fetch(`https://football-teams-rest-api-assignment.onrender.com/api/update/${id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(team)
        })
        fetchTeam()
        navigate(`/team/${id}`)
        
    }
    return (
        <>
        <Navigate />
        <div className="container my-5 pb-5">
            <h1 className="text-center my-5" style={{fontFamily: "'Oswald', sans-serif"}}>Update Team</h1>
            <Form>
            <Container>
                    <Row>
                        <Col xs="12" sm="3"></Col>
                        <Col xs="12" sm="6" className="m-1">
                            <Form.Group className="mb-3">
                                <Form.Label>Link to image of badge</Form.Label>
                                <Form.Control type="text" defaultValue={team.badgeUrl} placeholder="Enter image url" onChange={(e) => setBadgeUrl(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Label>Team name</Form.Label>
                                <Form.Control type="text" defaultValue={team.name} placeholder="Enter team name" onChange={(e) => setName(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Label>Nickname</Form.Label>
                                <Form.Control type="text" defaultValue={team.nickname} placeholder="Enter team nickname" onChange={(e) => setNickname(e.target.value)} required/>
                            </Form.Group> 
                            <Form.Group className="mb-3">
                                <Form.Label>Founded</Form.Label>
                                <Form.Control type="number" defaultValue={team.founded} placeholder="What year?" onChange={(e) => setFounded(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Label>Ground name</Form.Label>
                                <Form.Control type="text" defaultValue={team.groundName} placeholder="Where do they play?" onChange={(e) => setGroundName(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3" onChange={(e) => setGroundCapacity(e.target.value)} required>
                                <Form.Label>Ground capacity</Form.Label>
                                <Form.Control type="number" defaultValue={team.groundCapacity} placeholder="Ground capacity" />
                            </Form.Group> 
                            <Form.Group className="mb-3">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" defaultValue={team.country} placeholder="Country name" onChange={(e) => setCountry(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Label>League</Form.Label>
                                <Form.Control type="text" defaultValue={team.league} placeholder="League name" onChange={(e) => setLeague(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Label>Coach</Form.Label>
                                <Form.Control type="text" defaultValue={team.coach} placeholder="Coach name" onChange={(e) => setCoach(e.target.value)} required />
                            </Form.Group>
                        </Col>
                        <Col xs="12" sm="3"></Col>
                    </Row>
                    <Row className=" text-center d-flex justify-content-center">
                        <Col xs="12" sm="3"></Col>
                        <Col xs="12" md="3">
                            <Button className="custom-btn-light mt-1" style={{width: "100px"}} onClick={updateData} variant="primary" type="submit">
                              Submit
                            </Button>
                        </Col>
                        <Col xs="12" md="3">
                            <Button className="custom-btn-light mt-1" style={{width: "100px"}} onClick={() => navigate(-1)}>
                                Back
                            </Button>
                        </Col>
                        <Col xs="12" sm="3"></Col>
                    </Row>
                </Container>
            </Form>
        </div>
        <Footer />
    </>
    
    )
}

export default UpdateTeam