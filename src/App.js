import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Navigate from "./components/Navigate";
import 'bootstrap/dist/css/bootstrap.css'
import AddTeam from "./components/AddTeam";
import About from "./components/About"
import TeamCardHolder from "./components/TeamCardHolder";
import TeamInfo from "./components/TeamInfo";
import UpdateTeam from "./components/UpdateTeam";
import UserCardHolder from "./components/UserCardHolder";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn"

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [teams, setTeams ] = useState([]);
  const [users, setUsers ] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();

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
        <Route path="/allteams" element={ <TeamCardHolder isLoading={isLoading} teams={teams} isLoggedIn={isLoggedIn}/>} />
        <Route path="/addteam" element={<AddTeam isLoggedIn={isLoggedIn}/>} />
        <Route path="/team/:id" element={<TeamInfo teams={teams} isLoggedIn={isLoggedIn}/>} />
        <Route path="/team/update/:id" element={<UpdateTeam isLoggedIn={isLoggedIn}/>} />
        
        {/* User routes  */}
        <Route path="/allusers" element={ <UserCardHolder isLoggedIn={isLoggedIn} isLoading={isLoading} users={users} teams={teams}/>} />
        <Route path="/signup" element={<SignUp isLoggedIn={isLoggedIn}/>} />
        <Route path="/signin" element={<SignIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userId={userId} setUserId={setUserId}/>} />

        {/* Uncomment the routes below once each component is ready  */}

        {/*<Route path="/user/:id" element={<UserInfo users={users} isLoggedIn={isLoggedIn}/>} />
        <Route path="/user/update/:id" element={<UpdateUser isLoggedIn={isLoggedIn} />} /> */}
      </Routes>
    </Router>
  </>      
  );
}

export default App;
