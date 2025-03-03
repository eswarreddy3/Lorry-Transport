import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../Styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for redirection

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('https://lorry-backend.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token); // Accessing token from the JSON object
      navigate('/booking'); // Redirect to booking page
      window.location.reload();
    } else {
      const errorMessage = await response.text(); // Handling non-JSON response
      console.error('Failed to login with error:', errorMessage);
      alert('Failed to login');
    }
};


  return (
    <>
    <p>1</p>
    <div className="container-top-book"></div>
    <div className="loginBody">
    <div className="loginContainer">
        <h2 className="loginHead">Login</h2>
        <form className="loginForm" onSubmit={handleSubmit}>
            <div className="inputGroup">
                <label className="loginLabel" htmlFor="username">Username:</label>
                <input
                    id="username"
                    className="loginInput"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="inputGroup">
                <label className="loginLabel" htmlFor="password">Password:</label>
                <input
                    id="password"
                    className="loginInput"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</div>

    </>
  );
}

export default Login;
