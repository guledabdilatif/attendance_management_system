// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  MapPin,
  Briefcase,
  CalendarDays,
  LogOut,
} from "lucide-react";

const linkBase =
  "nav-link d-flex align-items-center px-3 py-2 rounded text-decoration-none";

const Sidebar = () => {
  return (
    <aside
      className="d-flex flex-column bg-dark text-white vh-100 p-3 shadow"
      style={{ width: "240px" }}
    >
      <h5 className="fw-bold text-center mb-4">Attendance System</h5>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="mb-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-primary text-white" : "text-white-50"}`
            }
          >
            <LayoutDashboard size={18} className="me-2" />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li className="mb-2">
          <NavLink
            to="/attendance"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-primary text-white" : "text-white-50"}`
            }
          >
            <ClipboardList size={18} className="me-2" />
            <span>Attendance</span>
          </NavLink>
        </li>

        <li className="mb-2">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-primary text-white" : "text-white-50"}`
            }
          >
            <Users size={18} className="me-2" />
            <span>Employees</span>
          </NavLink>
        </li>

       
        <li className="mb-2">
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-primary text-white" : "text-white-50"}`
            }
          >
            <Briefcase size={18} className="me-2" />
            <span>Tasks</span>
          </NavLink>
        </li>

        <li className="mb-2">
          <NavLink
            to="/leave"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-primary text-white" : "text-white-50"}`
            }
          >
            {/* use CalendarDays to avoid any name collisions */}
            <CalendarDays size={18} className="me-2" />
            <span>Leave</span>
          </NavLink>
        </li>
      </ul>

      <div className="mt-auto">
        <NavLink to="/" className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2">
          <LogOut size={18} />
          Logout
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
