import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function TeamCard(props) {
  const navigate = useNavigate();
  const id = props.id;

  const navigateToUserCard = () => {
    navigate(`/user/${id}`)
  }
  return (

    <Card style={{ width: '25rem', margin: '15px',border: 'solid rgb(60, 0, 90)'}}>      
      <Card.Img variant="top" src={props.badge} alt={props.badge} style={{backgroundColor: "rgb(60, 0, 90)", padding: "20px", height: "350px"}}/>
      <Card.Body style={{height: "100px"}}>
        <div className='d-flex flex-row justify-content-between'>          
          <Card.Title as={"h4"}>{props.firstName} {props.lastName}</Card.Title>
          <Button onClick={navigateToUserCard} className='custom-btn'>More info</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TeamCard