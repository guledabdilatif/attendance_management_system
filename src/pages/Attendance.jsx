import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from './Navbar'
import { useState } from 'react'

const Attendance = () => {
  const [attendances] = useState([
    {
      id: 1,
      user_name: "John Doe",
      status: "active",
      check_in: "2025-08-18T08:00:00",
      check_out: "2025-08-18T17:00:00",
      location_name: "Nairobi, Kenya",
    },
    {
      id: 2,
      user_name: "Jane Smith",
      status: "on_leave",
      check_in: null,
      check_out: null,
      location_name: "-",
    },
    {
      id: 3,
      user_name: "Michael Brown",
      status: "active",
      check_in: "2025-08-18T09:15:00",
      check_out: null,
      location_name: "Mombasa, Kenya",
    },
  ]);
  return (
    <div style={{ display: 'flex', alignItems: 'start' }}>
      {/* Sidebar */}
      <div style={{ width: '20%' }}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="p-6" style={{ width: '80%', height: '100vh' }}>
        <Navbar />
        <div className="container mt-4">
          <h2 style={{ color: "black" }}>Employee Attendance Dashboard</h2>
          <table className="table table-bordered table-striped">
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th>#</th>
                <th>Employee</th>
                <th>Status</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {attendances.map((a, idx) => (
                <tr key={a.id}>
                  <td>{idx + 1}</td>
                  <td style={{ color: "black" }}>{a.user_name}</td>
                  <td>
                    {a.status === "active" ? (
                      <span
                        className="badge"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        Active
                      </span>
                    ) : (
                      <span
                        className="badge"
                        style={{ backgroundColor: "red", color: "white" }}
                      >
                        On Leave
                      </span>
                    )}
                  </td>
                  <td style={{ color: "green" }}>
                    {a.check_in ? new Date(a.check_in).toLocaleTimeString() : "-"}
                  </td>
                  <td style={{ color: "red" }}>
                    {a.check_out ? new Date(a.check_out).toLocaleTimeString() : "-"}
                  </td>
                  <td style={{ color: "black" }}>{a.location_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



      </div>
    </div>
  )
}

export default Attendance