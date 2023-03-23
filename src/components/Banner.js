import React from 'react'
import SearchFunction from './SearchFunction'
import { Container } from 'react-bootstrap'


function Banner({teams}) {
  console.log("Teams from banner", teams )
  return (
    <>
    
    <div className='banner-box'>
      <Container>
          <div className="banner-box-title d-none d-md-flex justify-content-center" style={{fontFamily: "'Oswald', sans-serif"}}>
            Welcome to Teamfinder
          </div>
          <div className="banner-box-title d-flex d-md-none justify-content-center" style={{fontFamily: "'Oswald', sans-serif", fontSize: "25px"}}>
            Welcome to Teamfinder
          </div>
          <SearchFunction teams={teams}/>
      </Container>    
    </div>
      
    </>
  )
}

export default Banner