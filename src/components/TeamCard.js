import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TeamCard(props) {
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.badge} alt={props.badge}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            {props.nickname}
        </Card.Text>
        <Card.Text>
            {props.groundName}
        </Card.Text>
        <Button className='custom-btn'>More info...</Button>
      </Card.Body>
    </Card>
  )
}

export default TeamCard