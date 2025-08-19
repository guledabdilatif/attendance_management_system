import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "./Navbar";

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Employee",
      status: "active",
      department: "IT",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Manager",
      status: "inactive",
      department: "HR",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      role: "Employee",
      status: "active",
      department: "Finance",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
    status: "active",
  });

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployees([
      ...employees,
      { id: employees.length + 1, ...newEmployee },
    ]);
    setNewEmployee({
      name: "",
      email: "",
      role: "",
      department: "",
      status: "active",
    });
    setShowForm(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "start" }}>
      {/* Sidebar */}
      <div style={{ width: "20%" }}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="p-6" style={{ width: "80%", height: "100vh" }}>
        <Navbar />
        <div className="container mt-4">
          <button
            onClick={() => setShowForm(true)}
            className="btn btn-success btn-sm float-end fs-9"
          >
            + Add Employee
          </button>

          {/* Employees Table */}
          <table className="table table-hover table-striped">
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, idx) => (
                <tr key={emp.id}>
                  <td>{idx + 1}</td>
                  <td style={{ color: "black" }}>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.role}</td>
                  <td>{emp.department}</td>
                  <td>
                    {emp.status === "active" ? (
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
                        Inactive
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Popup Form Modal */}
        {showForm && (
          <div className="fixed inset-0  items-center justify-center" style={{position:'absolute', top:'20px', width:'100%'}}>
            <div
              className="bg-white p-5 rounded-3 shadow-lg"
              style={{ width: "60%" }}
            >
              <h3 className="mb-3" style={{ color: "black" }}>
                Add Employee
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newEmployee.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={newEmployee.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={newEmployee.role}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={newEmployee.department}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    name="status"
                    value={newEmployee.status}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-success">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employees;
