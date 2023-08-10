import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom'
import './App.css';
import Navigate from "./components/Navigate";
import 'bootstrap/dist/css/bootstrap.css'
import AddTeam from "./components/AddTeam";
import About from "./components/About"
import TeamCardHolder from "./components/TeamCardHolder";
import TeamInfo from "./components/TeamInfo";
import UpdateTeam from "./components/UpdateTeam";
import UserCardHolder from "./components/UserCardHolder";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [teams, setTeams ] = useState([]);
  const [users, setUsers ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      setIsLoading(true);

      const teamsResponse = await fetch('https://football-teams-rest-api-assignment.onrender.com/api/getall')
      const teamsData = await teamsResponse.json()
      const sortedTeams = teamsData.sort((a, b) => a.name.localeCompare(b.name))

      const usersResponse = await fetch('https://football-teams-rest-api-assignment.onrender.com/users')
      const usersData = await usersResponse.json()
      const sortedUsers = usersData.sort((a, b) => a.firstName.localeCompare(b.firstName))

      setIsLoading(false);
      setTeams(sortedTeams)
      setUsers(sortedUsers)
      // Check users are working! 
      console.log(users)
    }

    fetchData()
  }, []) 
  
  return (
    <>
    <Router>
      <Routes>
        {/* Home route  */}
        <Route path="/" element={[<Navigate />, <About />]} />
        {/* Team routes  */}
        <Route path="/allteams" element={ <TeamCardHolder isLoading={isLoading} teams={teams} />} />
        <Route path="/addteam" element={<AddTeam />} />
        <Route path="/team/:id" element={<TeamInfo teams={teams} />} />
        <Route path="/team/update/:id" element={<UpdateTeam />} />
        {/* User routes  */}
        <Route path="/allusers" element={ <UserCardHolder isLoading={isLoading} users={users}/>} />
        {/* <Route path="/adduser" element={<AddUser />} />
        <Route path="/user/:id" element={<UserInfo users={users} />} />
        <Route path="/user/update/:id" element={<UpdateUser />} /> */}
      </Routes>
    </Router>
  </>      
  );
}

export default App;
