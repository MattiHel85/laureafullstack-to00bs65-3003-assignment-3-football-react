import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Container from 'react-bootstrap/Container';
import SearchFunction from "./SearchFunction";



function About() {
  
  return (
    <>
    <Container>
      <h1 className="banner-box-title justify-content-center" style={{fontFamily: "'Oswald', sans-serif"}}>Welcome to Teamfinder</h1>
      <div className='d-flex justify-content-center mt-5'>
        <SearchFunction />
      </div>
      <h3 className='p-2 mt-5'>What is it?</h3>
      <p className='p-2'>
          Teamfinder is the third of three projects built as part of my full stack course at Laurea University of Applied Sciences. It is a front end project built in React which connects to the REST API I built for the second assignment.
          <br></br>
          The API was built using NodeJS, Express, Mongoose and MongoDB, and can be found <a id='api-link' href='https://football-teams-rest-api-assignment.onrender.com/api/' target={'_blank'}>here</a>. This app was built using React, React Bootstrap, and CSS.
      </p>
      <p className='p-2'>
          The purpose of this web app is to catalogue basic information of football teams around the world. The API follows CRUD functionality so entries can be read, added, updated, and deleted via HTTP requests sent from this website.
          <br></br>
          As per the assignment requirements, this is a fairly basic app and anyone with access can add teams to it.
      </p>
      <h3>
        What next?
      </h3>
      <p>
        I intend to increase functionality by adding user sign up, so only users can contribute. I will also improve the data schemas so leagues and countries can be added and will make improvements to the UI and make it more mobile friendly.
      </p>
      <div className='d-flex flex-row justify-content-center p-5 mb-4'>
        <div className='p-3 m-3 flex-column text-center'>
          <h3>LinkedIn</h3>
          <SocialIcon  size="lg" url='https://www.linkedin.com/in/matt-simpson-finland/' target={'_blank'} rel="noreferrer"/>
        </div>
        <div className='p-3 m-3 flex-column text-center'>
          <h3>GitHub</h3>
          <SocialIcon url='https://github.com/MattiHel85' target={'_blank'} rel="noreferrer"/>
        </div>
      </div>
    </Container>
  </>
  )
}

export default About