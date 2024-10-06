import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav : React.FC = () => {
    const token = localStorage.getItem('token');
  return (
    <nav className="navbar">
    <ul>
      <li>
        <Link to="/" className="nav-link">Home</Link>
      </li>
      {token ? (
        <>
          <li>
            <Link to="/profile" className="nav-link">Profile</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">Register</Link>
          </li>
        </>
      )}
    </ul>
  </nav>
  )
}

export default Nav