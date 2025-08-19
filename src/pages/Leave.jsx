import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "./Navbar";

const Leaves = () => {
  const [leaves, setLeaves] = useState([
    {
      id: 1,
      employee: "John Doe",
      startDate: "2025-08-20",
      endDate: "2025-08-25",
      reason: "Vacation",
      status: "Pending",
      rejectReason: "",
    },
    {
      id: 2,
      employee: "Jane Smith",
      startDate: "2025-08-22",
      endDate: "2025-08-24",
      reason: "Medical Leave",
      status: "Pending",
      rejectReason: "",
    },
    {
      id: 3,
      employee: "Michael Brown",
      startDate: "2025-08-15",
      endDate: "2025-08-18",
      reason: "Family Emergency",
      status: "Pending",
      rejectReason: "Exceeded leave balance",
    },
  ]);

  const [selectedRejectId, setSelectedRejectId] = useState(null);
  const [rejectText, setRejectText] = useState("");

  // Calculate number of days between start and end date
  const calculateDays = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    const diff = Math.ceil((e - s) / (1000 * 60 * 60 * 24)) + 1; // inclusive
    return diff;
  };

  const handleApprove = (id) => {
    setLeaves(
      leaves.map((leave) =>
        leave.id === id ? { ...leave, status: "Approved", rejectReason: "" } : leave
      )
    );
  };

  const handleReject = (id) => {
    if (!rejectText.trim()) return alert("Please provide a rejection reason.");
    setLeaves(
      leaves.map((leave) =>
        leave.id === id
          ? { ...leave, status: "Rejected", rejectReason: rejectText }
          : leave
      )
    );
    setRejectText("");
    setSelectedRejectId(null);
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
          <h3 style={{ color: "black" }}>Leave Management</h3>

          {/* Leaves Table */}
          <table className="table table-hover table-striped text-center">
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th>#</th>
                <th>Employee</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>No. of Days</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaves.map((leave, idx) => (
                <tr key={leave.id}>
                  <td>{idx + 1}</td>
                  <td style={{ color: "black" }}>{leave.employee}</td>
                  <td>{leave.startDate}</td>
                  <td>{leave.endDate}</td>
                  <td>{calculateDays(leave.startDate, leave.endDate)}</td>
                  <td>{leave.reason}</td>
                  <td>
                    {leave.status === "Approved" ? (
                      <span className="badge" style={{ backgroundColor: "green", color: "white" }}>
                        Approved
                      </span>
                    ) : leave.status === "Pending" ? (
                      <span className="badge" style={{ backgroundColor: "black", color: "white" }}>
                        Pending
                      </span>
                    ) : (
                      <span className="badge" style={{ backgroundColor: "red", color: "white" }}>
                        Rejected
                      </span>
                    )}
                    {leave.status === "Rejected" && leave.rejectReason && (
                      <div style={{ fontSize: "0.85rem", color: "red" }}>
                        Reason: {leave.rejectReason}
                      </div>
                    )}
                  </td>
                  <td>
                    {leave.status === "Pending" && (
                      <div className="d-flex flex-row gap-2">
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => handleApprove(leave.id)}
                        >
                          Approve
                        </button>
                        {selectedRejectId === leave.id ? (
                          <div>
                            <input
                              type="text"
                              className="form-control form-control-sm mb-2"
                              placeholder="Rejection reason"
                              value={rejectText}
                              onChange={(e) => setRejectText(e.target.value)}
                            />
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleReject(leave.id)}
                            >
                              Confirm Reject
                            </button>
                          </div>
                        ) : (
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => setSelectedRejectId(leave.id)}
                          >
                            Reject
                          </button>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaves;
