import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfileQuery } from '../../redux/api/profileApi';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/slice/authSlice';
import './Profile.css';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  const { data: user, error, isLoading } = useProfileQuery(userId ? userId : undefined);


  if (isLoading) return <div>Loading...</div>;

  if (error) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    dispatch(logOut());
    notification.success({
      message: "Logged out successfully!",
    });
    navigate('/login');
    window.location.reload();
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-info">
        <img src={user.avatar || 'https://via.placeholder.com/150'} alt="Avatar" className="avatar" />
        <h3 className="profile-name">Name: {user.name}</h3>
        <p className="profile-email">Email: {user.email}</p>
      </div>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Profile;




