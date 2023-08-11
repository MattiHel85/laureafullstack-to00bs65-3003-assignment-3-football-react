import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Navigate from "./Navigate";


function AddTeam() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName ] = useState();
    const [emailAddress, setEmailAddress ] = useState();
    const [password, setPassword ] = useState();
    const [confirmedPassword, setConfirmedPassword ] = useState();
    const [profilePicUrl, setProfilePicUrl] = useState();

    const [errorMessage, setErrorMessage ] = useState("");

    const navigate = useNavigate();

    const postData = (e) => {
        e.preventDefault()
        const user = {firstName, lastName, emailAddress, password, profilePicUrl}

        const confirmPassword = confirmedPassword

        const signUp = () => {
            fetch('https://football-teams-rest-api-assignment.onrender.com/api/users/add', 
                {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(user)
                })
            navigate('/home')
        }

        user.password === confirmPassword ? signUp() : setErrorMessage(`Password does not match. Please try again.`)
    }
    return (
        <>
        <Navigate />
        <div className="container my-5 pb-5">
            <h1 className="text-center my-3" style={{fontFamily: "'Oswald', sans-serif"}}>Sign up</h1>
            { errorMessage ? <h4 className="py-3 d-flex justify-content-center" style={{color: "red"}}>{errorMessage}</h4> : "" }
            <Form>
                <Container>
                    <Row>
                        <Col xs="12" sm="3"></Col>
                        <Col xs="12" sm="6" className="m-1">
                            <Form.Group className="mb-3">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" onChange={(e) => setFirstName(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" onChange={(e) => setLastName(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" onChange={(e) => setEmailAddress(e.target.value)} required/>
                            </Form.Group> 
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm password" onChange={(e) => setConfirmedPassword(e.target.value)} required/>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Label>Profile picture</Form.Label>
                                <Form.Control type="text" placeholder="URL to hosted profile picture" onChange={(e) => setProfilePicUrl(e.target.value)} required/>
                            </Form.Group> 
                        </Col>
                        <Col xs="12" sm="3"></Col>
                    </Row>
                    <Row className=" text-center d-flex justify-content-center">
                        <Col xs="12" sm="3"></Col>
                        <Col xs="12" md="3">
                            <Button className="custom-btn-light mt-1" style={{width: "100px"}} onClick={postData} variant="primary" type="submit">
                              Submit
                            </Button>
                        </Col>
                        <Col xs="12" md="3">
                            <Button className="custom-btn-light mt-1" style={{width: "100px"}} onClick={() => navigate(-1)}>
                                Back
                            </Button>
                        </Col>
                        <Col xs="12" sm="3"></Col>
                    </Row>
                </Container>
            </Form>
        </div>
    </>
    
    )
}

export default AddTeam