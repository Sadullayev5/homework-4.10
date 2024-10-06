import React, { useState } from 'react';
import { useSignUpMutation } from '../../redux/api/authApi'; 
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [signUp, { isLoading }] = useSignUpMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await signUp({ name, email, password, avatar }).unwrap();
      console.log(response);
      notification.success({
        message: "Registration successful!",
      });
      navigate('/login');
    } catch (err : any) {
        console.log(err)
      notification.error({
        message: `Registration failed: ${err.data.message}`,
      });
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="register-form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="register-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="register-form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="register-form-group">
          <label htmlFor="avatar">Avatar URL:</label>
          <input
            type="text"
            id="avatar"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            required
          />
        </div>
        <button className="register-button" type="submit" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
