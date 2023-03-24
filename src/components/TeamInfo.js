import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Footer from "./Footer";
import Navigate from "./Navigate";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

function TeamInfo() {
    const [isLoading, setIsLoading] = useState(false);
    const [showDeleteButton, setShowDeleteButton] = useState(false)
    const [team, setTeam ] = useState({});
    const { id } = useParams();    
    const navigate = useNavigate();

    useEffect(() => {
      const fetchTeam = async () => {
        const teamId = id;
        setIsLoading(true);
        const response = await fetch(`https://football-teams-rest-api-assignment.onrender.com/api/${teamId}`)
        const data = await response.json()
        setIsLoading(false);
        setTeam(data)
      }
      fetchTeam()
    }, [])

    async function deleteTeam(){
        axios.delete(`https://football-teams-rest-api-assignment.onrender.com/api/delete/${id}`)
            .then(navigate('/allteams'))
    }

    const updateTeam = () => {
        navigate(`/team/update/${id}`)
    }

  return (
    <>
      <Navigate />
      <div className="team-info">
        <Container style={{width: "100%"}} className="p-2 d-flex justify-content-center align-items-center">
          { isLoading ? <Spinner animation="grow" /> :         
              <Card className="p-5 d-flex justify-content-center align-items-center" style={{ border: "5px solid rgb(60, 0, 90)", borderRadius: "25px"}}>
                <Card.Img className="mx-1" variant="top" src={team.badgeUrl} />  
                <Card.Title style={{fontSize: "40px"}}>{team.name}</Card.Title>
                <hr /> 
                <Card.Subtitle style={{fontSize: "30px"}}>Nickname: {team.nickname}</Card.Subtitle>
                <hr />
                <div className="my-3 d-column-flex justify-content-center align-items-center">
                  <Card.Text className="mx-2" style={{fontSize: "20px"}}>
                    Founded: {team.founded} 
                  </Card.Text>
                  <Card.Text className="mx-2" style={{fontSize: "20px"}}>
                    Ground name: {team.groundName}
                  </Card.Text>
                  <Card.Text className="mx-2" style={{fontSize: "20px"}}>
                    Ground capacity: {team.groundCapacity}
                  </Card.Text>
                  <Card.Text className="mx-2" style={{fontSize: "20px"}}>
                    Country: {team.country}
                  </Card.Text>
                  <Card.Text className="mx-2" style={{fontSize: "20px"}}>
                    League: {team.league}
                  </Card.Text>
                  <Card.Text className="mx-2" style={{fontSize: "20px"}}>
                    Coach: {team.coach}
                  </Card.Text>
                </div>     

                {
                showDeleteButton === false ? 
                  <div className="d-inline-flex justify-content-center">
                    <Button onClick={() => navigate(-1)} className='custom-btn mx-2' style={{width: '50%'}}>Back</Button>
                    <Button onClick={updateTeam} className='custom-btn mx-2 ' style={{width: '50%'}}>Update</Button>
                    <Button onClick={() => setShowDeleteButton(true)} variant="danger" className='mx-2 ' style={{width: '50%'}}>Delete</Button>
                  </div> :
                  <div className='my-2' style={{color: "red"}}>
                    <h4>Delete {team.name}?</h4>
                    <div className="d-column justify-content-center">
                      <Button className="mt-1 custom-btn" onClick={() => setShowDeleteButton(false)} style={{width: "100%" }} >I've changed my mind</Button>
                      <Button className="mt-1" variant="danger" onClick={deleteTeam} style={{width: "100%" }} >Yes, delete</Button>
                    </div>
                  </div>
                }
              </Card>
          }
        </Container>      
         
      </div>
      <Footer />
    </>
  )
}

export default TeamInfo