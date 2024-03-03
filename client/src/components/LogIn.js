import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css'; 

const Login = ({ setLoggedIn, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  const handleLogin = () => {
    // Simulate login logic - you should replace this with actual authentication logic
    if (email === 'user' && password === 'password') {
      setLoggedIn(true); // Update loggedIn state
    } else {
      setError('Invalid Email or password');
    }

    navigate('/Task');
    onRequestClose();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-container">
      <div>
        <button className="close-button" onClick={onRequestClose}>
          &times; {/* "x" character for a cross icon */}
        </button>
      </div>
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
