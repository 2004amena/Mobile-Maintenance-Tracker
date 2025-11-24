import React, { useState } from "react";
import '../styles/Track.css';

export default function Track() {
  const [showStatus, setShowStatus] = useState(false); // state to control card visibility
  const [requestNumber, setRequestNumber] = useState("");

  const handleTrack = () => {
    if (requestNumber.trim() === "") {
      alert("Please enter a request number!");
      return;
    }
    setShowStatus(true);
  };

  return (
    <>
      
      <div className="track-container">
        <div className="track-header">
          <h1>Track Your Device</h1>
          <p>Enter your repair request number to check the latest status.</p>
        </div>

        <div className="track-box">
          <label>Request Number</label>
          <input
            className="track-input"
            placeholder="Example: RQ-10483"
            value={requestNumber}
            onChange={(e) => setRequestNumber(e.target.value)}
          />
          <button className="track-btn" onClick={handleTrack}>
            Track Now
          </button>
        </div>

        {showStatus && (
          <div className="status-card">
            <div className="status-title">Current Status</div>

            <div className="status-row">
              <span>Status:</span>
              <span>Under Repair</span>
            </div>

            <div className="status-row">
              <span>Technician:</span>
              <span>M. Habib</span>
            </div>

            <div className="status-row">
              <span>Last Updated:</span>
              <span>Today - 3:24 PM</span>
            </div>

            <div className="status-progress">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
