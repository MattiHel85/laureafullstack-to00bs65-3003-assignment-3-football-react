import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';



function SearchFunction({}) {
    const navigate = useNavigate();
    const [teams, setTeams ] = useState([]);
    const [search, setSearch] = useState('')
    const [teamsForSearch, setTeamsForSearch] = useState([])
    const [searchedTeam, setSearchedTeam] = useState()
    const [show, setShow] = useState(false)

    useEffect(() => {
        const fetchTeams = async () => {
          const response = await fetch('https://football-teams-rest-api-assignment.onrender.com/api/getall')
          const jsonData = await response.json()
          const data = jsonData.sort((a, b) => a.name.localeCompare(b.name))
          setTeams(data)
        }
        fetchTeams()
    }, []) 

    
    const teamSearch = (e) => {
        e.preventDefault()
        setSearchedTeam(search);
        setTeamsForSearch(teams)

        search !== null ? teamsForSearch.map((team) => 
        {
            team.name.toLowerCase() === search.toLowerCase() ? 
            navigate(`/team/${team._id}`) : setShow(true)
        }) : setShow(true)


        setSearch('')
    }

    return (
      <>           
        <div>
            <div>
                <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Find team"
                      className="me-2"
                      aria-label="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button className="custom-btn" onClick={teamSearch}>Search</Button>
                </Form>
            </div>
            <br></br>
            <div>
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
            </div>
        </div>
      </>
    )
}

export default SearchFunction