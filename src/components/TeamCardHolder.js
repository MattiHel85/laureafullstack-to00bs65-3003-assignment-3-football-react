import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import TeamCard from './TeamCard'
import Navigate from './Navigate';
import Footer from './Footer';
import { Button } from 'react-bootstrap';

function TeamCardHolder() {
    const [teams, setTeams ] = useState([]);

    useEffect(() => {
      const fetchTeams = async () => {
        const response = await fetch('https://football-teams-rest-api-assignment.onrender.com/api/getall')
        const data = await response.json()
        setTeams(data)
      }
      fetchTeams()
    }, [])
    console.log(teams[0]);
    const navigate = useNavigate();

    return (
        <>
            <Navigate />
            
            <div className='d-flex flex-row justify-content-evenly flex-wrap'>
                <div className='m-5'>
                    <Button className='custom-btn-light' onClick={() => navigate(-1)}>Go back</Button>
                </div>
                <div className='d-flex flex-row justify-content-center flex-wrap'>
                    {teams.map((team) => (
                        <TeamCard key={team._id} id={team._id} name={team.name} badge={team.badgeUrl} nickname={team.nickname} groundName={team.groundName}/>
                    ))}
                </div>
                
            </div>
            <Footer />
        </>
      
    )
}

export default TeamCardHolder