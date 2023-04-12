import React from 'react'
import { useNavigate } from 'react-router-dom';
import TeamCard from './TeamCard'
import Navigate from './Navigate';
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import SearchFunction from './SearchFunction';

function TeamCardHolder({teams, isLoading}) {
    const navigate = useNavigate();

    return (
        <>
            <Navigate />
            <div className='my-4 d-flex justify-content-center'>
                <SearchFunction teams={teams}/>
            </div>
            <div className='d-flex flex-column' style={{width: "100%", marginBottom: "75px"}}>
                
                <div className=' d-flex justify-content-center my-4'>
                    <h1>Browse Teams</h1>
                </div>
                <div className='d-flex flex-row justify-content-center flex-wrap'>
                    { isLoading && 
                        <div style={{width: '100%'}} className='d-flex justify-content-center'>
                            <Spinner animation="grow" /> 
                        </div>
                    }
                    { !isLoading &&
                        teams.map((team) => (
                            <TeamCard key={team._id} id={team._id} name={team.name} badge={team.badgeUrl} nickname={team.nickname} groundName={team.groundName}/>
                        ))
                        }
                </div>
                <div className='m-5 text-center'>
                    <Button className='custom-btn-light' onClick={() => navigate(-1)} style={{width:"25%"}}>Back</Button>
                </div>                
            </div>
        </>
      
    )
}

export default TeamCardHolder