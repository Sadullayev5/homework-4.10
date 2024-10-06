import React , { useState } from 'react'
import { useLoginMutation } from '../../redux/api/authApi';
import './Login.css'
import {notification} from 'antd'
import { useNavigate } from 'react-router-dom';

const Login : React.FC = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      try{
        const response = await login({ email, password }).unwrap();
      localStorage.setItem('token', response.access_token);
      notification.success({
          message: "Login successful!"
      })
      navigate('/profile')
      window.location.reload()
      }catch (err) {
        notification.error({
          message: "Login failed!"
      })
      }

    
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="login-button" type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default Login