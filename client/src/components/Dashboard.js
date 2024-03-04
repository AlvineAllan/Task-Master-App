import React from 'react';
import './Dashboard.css';

const Dashboard = ({ username, email, profilePicture }) => {
  return (
    <div className="dashboard">
      {/* <h2>Welcome, {username}</h2> */}
      <div className="profile">
        <div className="profile-picture">
          <img src={profilePicture} alt=" " />
        </div>
        <div className="profile-info">
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong> {email}</p>
          {/* Add more profile information as needed */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;