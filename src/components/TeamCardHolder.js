import React from 'react'
import { useNavigate } from 'react-router-dom';
import TeamCard from './TeamCard'
import Navigate from './Navigate';
import Footer from './Footer';
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

function TeamCardHolder({teams, isLoading}) {
    const navigate = useNavigate();

    return (
        <>
            <Navigate />
            
            <div className='d-flex flex-column' style={{width: "100%", marginBottom: "75px"}}>
                <div className=' d-flex justify-content-center my-4'>
                    <h1>Browse Teams</h1>
                </div>
                <div className='d-flex flex-row justify-content-center flex-wrap'>
                    {isLoading ? 
                        <div style={{width: '100%'}} className='d-flex justify-content-center'>
                            <Spinner animation="grow" /> 
                        </div>
                        : teams.map((team) => (
                        <TeamCard key={team._id} id={team._id} name={team.name} badge={team.badgeUrl} nickname={team.nickname} groundName={team.groundName}/>
                    ))}
                </div>
                <div className='m-5 text-center'>
                    <Button className='custom-btn-light' onClick={() => navigate(-1)}>Back</Button>
                </div>                
            </div>
            <Footer />
        </>
      
    )
}

export default TeamCardHolder