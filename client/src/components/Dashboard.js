import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Dashboard.css';

const Dashboard = ({ username, email, profilePicture }) => {
  // State variables to store task data
  const [tasksData, setTasksData] = useState([]);
  const [totalTasksCompleted, setTotalTasksCompleted] = useState(0);
  const [totalTasksIncomplete, setTotalTasksIncomplete] = useState(0);

  useEffect(() => {
    // Fetch task data from backend when component mounts
    fetch('/user/tasks')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch task data');
        }
        return response.json();
      })
      .then(data => {
        // Extract progress data from tasks
        const progressData = data.map(task => task.progress);
        
        // Calculate total tasks completed and incomplete
        const completedTasks = progressData.filter(progress => progress === 100);
        setTotalTasksCompleted(completedTasks.length);
        setTotalTasksIncomplete(progressData.length - completedTasks.length);

        // Set tasks data for the bar chart
        setTasksData(data);
      })
      .catch(error => {
        console.error('Error fetching task data:', error);
      });
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className="dashboard">
      <div className="profile">
        <div className="profile-picture">
          {profilePicture ? <img src={profilePicture} alt="Profile" /> : <div className="no-picture"></div>}
        </div>
        <div className="profile-info">
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      </div>

      <div className="chart-card">
        <h3>Task Progress</h3>
        <BarChart width={400} height={300} data={tasksData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="progress" stackId="a" fill="#8884d8" />
        </BarChart>
      </div>

      <div className="task-cards">
        <div className="task-card">
          <h3>Total Tasks Completed</h3>
          <p>{totalTasksCompleted}</p>
        </div>
        <div className="task-card">
          <h3>Total Tasks Incomplete</h3>
          <p>{totalTasksIncomplete}</p>
        </div>
        <div className="task-card">
          <h3>% of Tasks Completed</h3>
          <p>{totalTasksCompleted === 0 ? '0%' : ((totalTasksCompleted / tasksData.length) * 100).toFixed(2) + '%'}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
