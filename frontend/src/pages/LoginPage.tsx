import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';
axios.defaults.baseURL = 'http://localhost:5000';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/auth/login', {
        username, password
      }
      );
      login(response.data.token);
      navigate('/tasks');
    } catch (error) {
      console.error('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Our user is User" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Just use 123" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
