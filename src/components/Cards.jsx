import React from "react";
import { Users, MapPin, CalendarCheck, ClipboardList } from "lucide-react";

const DashboardCards = () => {
  const cards = [
    {
      title: "Active Users",
      value: 12,
      icon: <Users size={32} color="#0d6efd" />, // blue
    },
    {
      title: "On Leave",
      value: 3,
      icon: <CalendarCheck size={32} color="#198754" />, // green
    },
    {
      title: "Tasks Assigned",
      value: 25,
      icon: <ClipboardList size={32} color="#ffc107" />, // yellow
    },
    {
      title: "Locations Tracked",
      value: 8,
      icon: <MapPin size={32} color="#dc3545" />, // red
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card shadow-sm text-center p-3 border-0">
              <div className="mb-2">{card.icon}</div>
              <h5 className="fw-bold">{card.title}</h5>
              <p className="fs-4 mb-0">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
