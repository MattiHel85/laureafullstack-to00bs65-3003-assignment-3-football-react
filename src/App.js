import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom'
import './App.css';
import Navigate from "./components/Navigate";
import Banner from "./components/Banner";
import 'bootstrap/dist/css/bootstrap.css'
import AddTeam from "./components/AddTeam";
import About from "./components/About"
import TeamCardHolder from "./components/TeamCardHolder";
import Footer from "./components/Footer"
import TeamInfo from "./components/TeamInfo";
import UpdateTeam from "./components/UpdateTeam";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [teams, setTeams ] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      setIsLoading(true);
      const response = await fetch('https://football-teams-rest-api-assignment.onrender.com/api/getall')
      const jsonData = await response.json()
      const data = jsonData.sort((a, b) => a.name.localeCompare(b.name))
      setIsLoading(false);
      setTeams(data)
    }
    fetchTeams()
  }, []) 
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={[<Navigate />, <Banner teams={teams}/>, <About />, <Footer />]} />
        <Route path="/allteams" element={ <TeamCardHolder isLoading={isLoading} teams={teams} />} />
        <Route path="/addteam" element={<AddTeam />} />
        <Route path="/team/:id" element={<TeamInfo teams={teams} />} />
        <Route path="/team/update/:id" element={<UpdateTeam />} />
      </Routes>
    </Router>
  </>      
  );
}

export default App;
