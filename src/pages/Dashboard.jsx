import React from "react";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";
import Navbar from "./Navbar";
import AttendanceLogs from "../components/AttendanceLogs";
import PieChartComponent from "../components/PieChartComponent";
import AreaChartComponent from "../components/AreaChartComponent";

const Dashboard = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'start' }}>
            {/* Sidebar */}
            <div style={{ width: '20%' }}>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="p-6" style={{ width: '80%' }}>
                <Navbar />
                <Cards />
                {/* Charts */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <PieChartComponent />
                        </div>
                        <div className="col-md-6">
                            <AreaChartComponent />
                        </div>
                    </div>
                <AttendanceLogs />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
