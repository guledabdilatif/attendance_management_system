import React from "react";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";
import Navbar from "./Navbar";

const Dashboard = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'start' }}>
            {/* Sidebar */}
            <div style={{width:'20%'}}>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-danger p-6" style={{width:'80%', height:'100vh'}}>
               <Navbar/>
               <Cards/>
            </div>
        </div>
    );
};

export default Dashboard;
