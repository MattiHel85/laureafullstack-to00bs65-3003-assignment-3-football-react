import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function TeamCard(props) {
  const navigate = useNavigate();
  const id = props.id;
  // console.log(id);

  const navigateToTeamCard = () => {
    navigate(`/team/${id}`)
  }
  return (

    <Card style={{ width: '18rem', margin: '15px',border: 'solid rgb(60, 0, 90)'}}>
      <Card.Img variant="top" src={props.badge} alt={props.badge} style={{backgroundColor: "rgb(60, 0, 90)", padding: "10px"}}/>
      <Card.Body>
        <Card.Title as={"h4"}>{props.name}</Card.Title>
        <Card.Text>
            {props.nickname}
        </Card.Text>
        <Card.Text>
            {props.groundName}
        </Card.Text>
        <div className='d-flex flex-row justify-content-evenly'>
          <Button onClick={navigateToTeamCard} className='custom-btn'>More info</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TeamCard