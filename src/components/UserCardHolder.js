import React from 'react'
import { useNavigate } from 'react-router-dom';
import UserCard from './UserCard'
import Navigate from './Navigate';
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import SearchFunction from './SearchFunction';

function UserCardHolder({users, isLoggedIn, isLoading, teams}) {
    const navigate = useNavigate();

    return (
        <>
            <Navigate />
            <div className='my-4 d-flex justify-content-center'>
                <SearchFunction teams={teams}/>
            </div>
            <div className='d-flex flex-column' style={{width: "100%", marginBottom: "75px"}}>
                
                <div className=' d-flex justify-content-center my-4'>
                    <h1>Browse Users</h1>
                </div>
                <div className='d-flex flex-row justify-content-center flex-wrap'>
                    { isLoading && 
                        <div style={{width: '100%'}} className='d-flex justify-content-center'>
                            <Spinner animation="grow" /> 
                        </div>
                    }
                    { !isLoading &&
                        users.map((user) => (
                            <UserCard key={user._id} id={user._id} firstName={user.firstName} lastName={user.lastName} profilePicUrl={user.profilePicUrl}/>
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

export default UserCardHolder