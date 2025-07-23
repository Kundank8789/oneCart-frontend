import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Registration from './pages/Registration.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Nav from './components/Nav.jsx'

function App  ()  {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/signup" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App