import React, { useState, useEffect } from "react";
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Link to image of badge</Form.Label>
          <Form.Control type="text" placeholder="Enter image url" onChange={(e) => setBadgeUrl(e.target.value)}/>
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>   
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Team name</Form.Label>
          <Form.Control type="text" placeholder="Enter team name" onChange={(e) => setName(e.target.value)}/>
        </Form.Group>   
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nickname</Form.Label>
          <Form.Control type="text" placeholder="Enter team nickname" onChange={(e) => setNickname(e.target.value)}/>
        </Form.Group>   
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Founded</Form.Label>
          <Form.Control type="number" placeholder="When were they founded?" onChange={(e) => setFounded(e.target.value)}/>
        </Form.Group>   
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ground name</Form.Label>
          <Form.Control type="text" placeholder="Where do they play?" onChange={(e) => setGroundName(e.target.value)}/>
        </Form.Group>   
        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e) => setGroundCapacity(e.target.value)}>
          <Form.Label>Ground capacity</Form.Label>
          <Form.Control type="number" placeholder="Enter ground capacity" />
        </Form.Group>   
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="In which country do they play?" onChange={(e) => setCountry(e.target.value)}/>
        </Form.Group>   
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>League</Form.Label>
          <Form.Control type="text" placeholder="And which league do they play in?" onChange={(e) => setLeague(e.target.value)}/>
        </Form.Group>   
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Coach</Form.Label>
          <Form.Control type="text" placeholder="And who is their coach?" onChange={(e) => setCoach(e.target.value)}/>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button onClick={postData} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default AddTeam