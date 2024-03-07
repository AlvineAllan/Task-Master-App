import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Logout.css'; 

const Logout = ({ userData }) => {
  const navigate = useNavigate(); 

  const handleLogout = async () => {
    try {
      // Perform logout for user
      await fetch('http://127.0.0.1:5555/users/logout', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Perform logout for artist
      await fetch('http://127.0.0.1:5555/artists/logout', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Logout successful');

      // Redirect to the home page after successful logout
      navigate('/'); // Assuming '/' is your home page route
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  console.log(userData);

  return (
    <div className="logout-container">
      <div className="logout-content">
        <h1>Logout</h1>
        <p>Are you sure you want to logout?</p>
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
