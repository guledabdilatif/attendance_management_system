import React from "react";
import { Link } from "react-router-dom";

const cardsData = [
  {
    id: 1,
    title: "Attendance",
    value: "85%",
    link: "/attendance",
    bg: "bg-blue-500",
  },
  {
    id: 2,
    title: "Students",
    value: "320",
    link: "/students",
    bg: "bg-green-500",
  },
  {
    id: 3,
    title: "Teachers",
    value: "25",
    link: "/teachers",
    bg: "bg-purple-500",
  },
  {
    id: 4,
    title: "Classes",
    value: "12",
    link: "/classes",
    bg: "bg-orange-500",
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      <h1>cards</h1>
    </div>
  );
};

export default Cards;
