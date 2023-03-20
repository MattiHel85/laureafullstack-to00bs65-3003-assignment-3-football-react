import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import Button from 'react-bootstrap/Button';
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

    const navigate = useNavigate();

    const postData = () => {
        const team = {badgeUrl, name, nickname, founded, groundName, groundCapacity, country, league, coach}
        console.log(team)

        fetch('https://football-teams-rest-api-assignment.onrender.com/api/add', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(team)
        }).then(() => {
            console.log(`${team.teamName} added`)
        })
    }
    return (
        <>
        <Navigate />
        <div className="container my-5 pb-5">
            <h1 className="text-center my-5">Add Team</h1>
            <Form onSubmit={(e) => e.preventDefault()}>
                <div className="d-flex justify-content-center">
                    <div className="mx-3">
                        <Form.Group className="mb-3">
                            <Form.Label>Link to image of badge</Form.Label>
                            <Form.Control type="text" placeholder="Enter image url" onChange={(e) => setBadgeUrl(e.target.value)}/>
                        </Form.Group>   
                        <Form.Group className="mb-3">
                            <Form.Label>Team name</Form.Label>
                            <Form.Control type="text" placeholder="Enter team name" onChange={(e) => setName(e.target.value)}/>
                        </Form.Group>   
                        <Form.Group className="mb-3">
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control type="text" placeholder="Enter team nickname" onChange={(e) => setNickname(e.target.value)} required/>
                        </Form.Group> 
                    </div>
                    <div className="mx-3">
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
                    </div>
                    <div className="mx-3">
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
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-evenly">
                    <Button className="custom-btn-light" onClick={() => navigate(-1)}>
                        Go back
                    </Button>
                    <Button className="custom-btn-light" onClick={postData} variant="primary" type="submit">
                      Submit
                    </Button>
                </div>
            </Form>
        </div>
        <Footer />
    </>
    
    )
}

export default AddTeam