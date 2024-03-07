// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp'; 
import LogIn from './components/LogIn';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Task from './components/Tasks';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Project from './components/Project';
import Calendar from './components/Calendar';
import Logout from './components/Logout';
import More from './components/More';
import About from './components/About';
import MyTask from './components/MyTask';

const App = () => {
  
  return (
    <Router>
      <div>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/Task" element={<Task />} />
          <Route path="/Sidebar" element={<Sidebar/>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Calendar" element={<Calendar />} /> 
          <Route path="/Logout" element={<Logout  />} /> 
          <Route path="/More" element={<More  />} /> 
          <Route path="/About" element={<About  />} />  
          <Route path="/MyTask" element={<MyTask  />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
