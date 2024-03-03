import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import './SignUp.css';

const Signup = ({ onClose }) => {
  const [userFormData, setUserFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); 

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    // Your signup logic goes here
    navigate('/');
        
    onClose();
  };

  return (
    <div className="signup-modal">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <h2>Sign Up</h2>
      <form onSubmit={handleUserSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userFormData.name}
          onChange={handleUserChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userFormData.email}
          onChange={handleUserChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userFormData.password}
          onChange={handleUserChange}
        />
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
