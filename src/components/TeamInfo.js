import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Footer from "./Footer";
import Navigate from "./Navigate";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'

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
          { isLoading && <Spinner animation="grow" /> }
          { !isLoading &&
            <Card className="d-flex justify-content-center align-items-center" style={{ border: "5px solid rgb(60, 0, 90)", borderRadius: "25px"}}>
            <Card.Img className="mx-1 p-5" variant="top" src={team.badgeUrl} style={{backgroundColor: "rgb(60, 0, 90)"}}/>  
            <Card.Title className="mb-3"  style={{fontSize: "40px"}}>{team.name}</Card.Title>
            <Card.Subtitle className="mb-2" style={{fontSize: "20px"}}>Nickname: {team.nickname}</Card.Subtitle>
            <div className="my-3 d-column-flex justify-content-center align-items-center">
              <Table>
                <tbody>
                  <tr>
                    <td>
                      Founded
                    </td>
                    <td>
                     {team.founded}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Ground name
                    </td>
                    <td>
                      {team.groundName}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Ground capacity
                    </td>
                    <td>
                      {team.groundCapacity}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Country
                    </td>
                    <td>
                      {team.country}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      League
                    </td>
                    <td>
                      {team.league}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Coach
                    </td>
                    <td>
                      {team.coach}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>     
            { showDeleteButton &&
              <div className='my-2' style={{color: "red"}}>
                <h4>Delete {team.name}?</h4>
                <div className="d-column justify-content-center">
                  <Button className="mt-1 custom-btn" onClick={() => setShowDeleteButton(false)} style={{width: "100%" }} >I've changed my mind</Button>
                  <Button className="mt-1" variant="danger" onClick={deleteTeam} style={{width: "100%" }} >Yes, delete</Button>
                </div>
              </div>            
            }
            { !showDeleteButton &&
              <div className="mb-2 d-inline-flex justify-content-center">
                <Button onClick={() => navigate(-1)} className='custom-btn mx-2' style={{width: '50%'}}>Back</Button>
                <Button onClick={updateTeam} className='custom-btn mx-2 ' style={{width: '50%'}}>Update</Button>
                <Button onClick={() => setShowDeleteButton(true)} variant="danger" className='mx-2 ' style={{width: '50%'}}>Delete</Button>
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