import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';



function SearchFunction({teams}) {
    const navigate = useNavigate();
    const [search, setSearch] = useState('')
    const [teamsForSearch, setTeamsForSearch] = useState([])
    const [searchedTeam, setSearchedTeam] = useState()
    const [show, setShow] = useState(false)

    
    const teamSearch = () => {
        setSearchedTeam(search);
        setTeamsForSearch(teams)
        search !== null ? teamsForSearch.map((team) => 
        {
            team.name.toLowerCase() === search.toLowerCase() ? 
            navigate(`/team/${team._id}`) : setShow(true)
        }) : setShow(true)
    }

    return (
      <>           
        <Container className="mt-3 py-5 mx-3 d-flex justify-content-center">
            <Col>
                <Row className="p-3">
                    {
                        show && 
                        <Alert className="alert" variant="danger">
                            <Alert.Heading>
                                {
                                    searchedTeam && `The team ${searchedTeam} isn't listed, please try again.`
                                }
                                {
                                    !searchedTeam && "Please input some text."
                                }
                            </Alert.Heading>
                            <hr />
                            <div>
                                <div className="d-flex justify-content-start">
                                    <p>
                                        {
                                            searchedTeam && "If you think it should be then you can add it yourself."
                                        }
                                        {
                                            !searchedTeam && "I don't see the sense in searching for nothing"
                                        }
                                    </p>
                                </div>
                                <div className="d-flex justify-content-end">
                                    {
                                        searchedTeam && <Button onClick={() => navigate('/addteam')} variant="outline-danger" className="mx-1">Add team</Button>
                                    }
                                    <Button onClick={() => setShow(false)} variant="outline-danger" className="mx-1">
                                        Close 
                                    </Button>
                                </div>
                                
                            </div>
                        </Alert>
                    }
                </Row>
                <Row className="d-flex justify-content-center">
                    <InputGroup className="mb-3" style={{width: "75%"}}>
                        <Form.Control
                            placeholder="Find team"
                            aria-label="Search team"
                            aria-describedby="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button 
                            className="custom-btn" 
                            onClick={teamSearch}
                        >
                          Search
                        </Button>
                    </InputGroup>
                </Row>
            </Col>         
        </Container>
      </>
    )
}

export default SearchFunction