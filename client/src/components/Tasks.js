import React, { useState } from 'react';
 import Sidebar from './Sidebar';
 import Dashboard from './Dashboard';
 import MyTask from './MyTask';
import './Task.css';
import Project from './Project';
import Calendar from './Calendar';

const Task = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleSidebarItemClick = (page) => {
    setCurrentPage(page);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Africa/Nairobi'
    };
    return currentDate.toLocaleString('en-US', options);
  };

  return (
    <div className="container">
       <Sidebar onItemClick={handleSidebarItemClick} /> 
      <div className="main-content">
        <h2>Welcome to TaskToDo</h2>
         <p className="current-date">{getCurrentDate()}</p>

        
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'tasks' && <MyTask />} 
        {currentPage === 'project' && <Project />}
        {currentPage === 'calendar' && <Calendar />} 
      </div>
    </div>
  );
};

export default Task;
