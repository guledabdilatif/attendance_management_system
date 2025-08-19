import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Attendance from './pages/Attendance'
import Leave from './pages/Leave'
import Tasks from './pages/Tasks'
import Employees from './pages/Employees'
import Report from './pages/Report'
import Locations from './pages/locations'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />         
          <Route path="/leave" element={<Leave />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/users" element={<Employees />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
