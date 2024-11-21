import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/SignUp'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
