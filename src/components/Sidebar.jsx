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
  FileText,
} from "lucide-react";
import logo from "/logo-transparent.png";
const linkBase =
  "nav-link d-flex align-items-center px-3 py-2 rounded text-decoration-none";

const Sidebar = () => {
  return (
    <aside
      className="d-flex flex-column bg-dark text-white p-3 shadow"
      style={{ width: "240px", height: "150vh" }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // optional, helps vertical centering if parent has height
      }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            filter: 'brightness(0) invert(1)',
            width: '200px',
            marginBottom:'12px'
          }}
        />
      </div>


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
        <li className="mb-2">
          <NavLink
            to="/locations"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-primary text-white" : "text-white-50"}`
            }          >
            <FileText size={18} className="me-2" />
            <span>Locations</span>
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-primary text-white" : "text-white-50"}`
            }          >
            <MapPin size={18} className="me-2"/>
            <span>Reports</span>
          </NavLink>
        </li>
      </ul>



    </aside>
  );
};

export default Sidebar;
