import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Navigate from "./Navigate";
import Footer from "./Footer"


function AddTeam() {
    const [badgeUrl, setBadgeUrl ] = useState();
    const [name, setName ] = useState();
    const [nickname, setNickname ] = useState();
    const [founded, setFounded ] = useState();
    const [groundName, setGroundName ] = useState();
    const [groundCapacity, setGroundCapacity ] = useState();
    const [country, setCountry ] = useState();
    const [league, setLeague ] = useState();
    const [coach, setCoach ] = useState();
    const [errorMessage, setErrorMessage ] = useState("");

    const navigate = useNavigate();

    const postData = () => {
        const team = {badgeUrl, name, nickname, founded, groundName, groundCapacity, country, league, coach}
        console.log(team)

        fetch('https://football-teams-rest-api-assignment.onrender.com/api/add', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(team)
        })
        team.value > 0 ? navigate('/allteams') : setErrorMessage('Please fill in all fields')
    }
    return (
        <>
        <Navigate />
        <div className="container my-5 pb-5">
            <h1 className="text-center my-3" style={{fontFamily: "'Oswald', sans-serif"}}>Add Team</h1>
            { errorMessage ? <h4 className="py-3 d-flex justify-content-center" style={{color: "red"}}>{errorMessage}</h4> : "" }
            <Form>
                <Container>
                    <Row>
                        <Col xs="12" sm="3"></Col>
                        <Col xs="12" sm="6" className="m-1">
                            <Form.Group className="mb-3">
                                <Form.Label>Link to image of badge</Form.Label>
                                <Form.Control type="text" placeholder="Enter image url" onChange={(e) => setBadgeUrl(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Label>Team name</Form.Label>
                                <Form.Control type="text" placeholder="Enter team name" onChange={(e) => setName(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Label>Nickname</Form.Label>
                                <Form.Control type="text" placeholder="Enter team nickname" onChange={(e) => setNickname(e.target.value)} required/>
                            </Form.Group> 
                            <Form.Group className="mb-3">
                                <Form.Label>Founded</Form.Label>
                                <Form.Control type="number" placeholder="What year?" onChange={(e) => setFounded(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Label>Ground name</Form.Label>
                                <Form.Control type="text" placeholder="Where do they play?" onChange={(e) => setGroundName(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3" onChange={(e) => setGroundCapacity(e.target.value)} required>
                                <Form.Label>Ground capacity</Form.Label>
                                <Form.Control type="number" placeholder="Ground capacity" />
                            </Form.Group> 
                            <Form.Group className="mb-3">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Country name" onChange={(e) => setCountry(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Label>League</Form.Label>
                                <Form.Control type="text" placeholder="League name" onChange={(e) => setLeague(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Label>Coach</Form.Label>
                                <Form.Control type="text" placeholder="Coach name" onChange={(e) => setCoach(e.target.value)} required />
                            </Form.Group>
                        </Col>
                        <Col xs="12" sm="3"></Col>
                    </Row>
                    <Row className=" text-center d-flex justify-content-center">
                        <Col xs="12" sm="3"></Col>
                        <Col xs="12" md="3">
                            <Button className="custom-btn-light mt-1" style={{width: "100px"}} onClick={postData} variant="primary" type="submit">
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

export default AddTeam