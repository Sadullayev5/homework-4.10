import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import Register from './Register/Register'
import Profile from './Profile/Profile'

const RouteController : React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} />
    </Routes>
  )
}

export default RouteController