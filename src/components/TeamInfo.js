import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "./Footer";
import Navigate from "./Navigate";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import SearchFunction from './SearchFunction';

function TeamInfo() {
    const [isLoading, setIsLoading] = useState(false);
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

    console.log(team);

    const updateTeam = () => {
        navigate(`/team/update/${id}`)
    }

  return (
    <>
      <Navigate />
      <div className='my-4 d-flex justify-content-center'>
        <SearchFunction />
      </div>
      <div className="team-info">
        <Container style={{width: "100%"}}>
          { isLoading ? <Spinner animation="grow" /> :
          <Row>
            <Col xs={12} md={4}  className='d-inline-flex flex-column justift-content-center ms-auto pb-3'>
              <Image src={team.badgeUrl} className="img"></Image>
            </Col>
            <Col xs={12} md={4} className='d-inline-flex flex-column justift-content-center ms-auto pb-3'>
              <h4>{team.name}</h4>
              <p>Nickname: {team.nickname}</p>
              <p>Founded: {team.founded}</p>
              <p>Ground name: {team.groundName}</p>
              <p>Ground capacity: {team.groundCapacity}</p>
              <p>Country: {team.country}</p>
              <p>League: {team.league}</p>
              <p>Coach: {team.coach}</p>
            </Col>
            <Col xs={12} md={4} className='d-flex flex-row justify-content-center pb-3'>
            <div style={{width: '50%'}}>
              <Button onClick={() => navigate(-1)} className='custom-btn-light mb-2' style={{width: '100%'}}>Back</Button>
              <Button onClick={updateTeam} className='custom-btn-light mb-2 ' style={{width: '100%'}}>Update</Button>
              <Button onClick={deleteTeam} className='custom-btn-light mb-2 ' style={{width: '100%'}}>Delete</Button>
            </div>
            </Col>
          </Row>
          }
        </Container>        
      </div>
      <Footer />
    </>
  )
}

export default TeamInfo