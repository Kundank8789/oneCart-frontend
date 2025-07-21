import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Registration from './pages/Registration.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'

function App  ()  {
  return (
    <>
    <Routes>
      <Route path="/signup" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App