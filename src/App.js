import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Navigate from "./components/Navigate";
import Banner from "./components/Banner";
import 'bootstrap/dist/css/bootstrap.css'
import AddTeam from "./components/AddTeam";
import About from "./components/About"
import TeamCardHolder from "./components/TeamCardHolder";
import Footer from "./components/Footer"
import TeamInfo from "./components/TeamInfo";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={[<Navigate />, <Banner />, <About />, <Footer />]} />
        <Route path="/allteams" element={<TeamCardHolder />} />
        <Route path="/addteam" element={<AddTeam />} />
        <Route path="/team/:id" element={<TeamInfo />} />
      </Routes>
    </Router>
  </>      
  );
}

export default App;
