import React from 'react'
import SearchFunction from './SearchFunction'

function Banner({teams}) {
  console.log("Teams from banner", teams )
  return (
    <>
      <div className='banner-box'>
        <div className="banner-box-title" style={{fontFamily: "'Oswald', sans-serif"}}>
          Welcome to Teamfinder
        </div>
        <div className='banner-search'>
          <SearchFunction teams={teams}/>
        </div>
        
      </div>
    </>
  )
}

export default Banner