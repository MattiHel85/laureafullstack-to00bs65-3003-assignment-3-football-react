import React, { useState, useEffect } from "react";
import './App.css';
import Navigate from "./components/Navigate";
import Banner from "./components/Banner";
import TeamCard from "./components/TeamCard";
import 'bootstrap/dist/css/bootstrap.css'
import AddTeam from "./components/AddTeam";
import About from "./components/About"

function App() {
  const [teams, setTeams ] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('https://football-teams-rest-api-assignment.onrender.com/api/getall')
      const data = await response.json()
      setTeams(data)
    }
    fetchTeams()
  }, [])
  return (
    <>
    <Navigate />    
    <Banner />
    <About />
    <div id="teamCardHolder">
      {teams.map((team) => (
        <TeamCard name={team.name} badge={team.badgeUrl} nickname={team.nickname} groundName={team.groundName}/>
      ))}
    </div>
    <AddTeam />
  </>      
  );
}

export default App;
