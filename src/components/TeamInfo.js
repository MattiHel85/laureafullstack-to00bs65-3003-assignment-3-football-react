import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import Navigate from "./Navigate";
import axios from "axios";

function TeamInfo() {
    const [team, setTeam ] = useState({});
    const { id } = useParams();    
    const navigate = useNavigate();

    useEffect(() => {
      const fetchTeam = async () => {
        const response = await fetch(`https://football-teams-rest-api-assignment.onrender.com/api/${id}`)
        const data = await response.json()
        setTeam(data)
      }
      fetchTeam()
    }, [])

    async function deleteTeam(){
        axios.delete(`https://football-teams-rest-api-assignment.onrender.com/api/delete/${id}`)
            .then(navigate('/allteams'))
    }

    console.log(team);

    const updateTeam = (e) => {
        console.log('TEST WORKS1')
    }
    const updateItem = (e) => {
        console.log('TEST WORKS2')
    }

  return (
    <>
        <Navigate />
        <div>
            <p>Team name: {team.name}</p>
            <p>Founded: {team.founded}</p>
            <p>Coach: {team.coach}</p>
            <div className='d-flex flex-row justify-content-evenly'>
                <Button onClick={() => navigate(-1)} className='custom-btn'>Go back...</Button>
                <Button onClick={updateTeam} className='custom-btn'>Update team</Button>
                <Button onClick={updateItem} className='custom-btn'>Update field</Button>
                <Button onClick={deleteTeam} className='custom-btn'>Delete team</Button>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default TeamInfo