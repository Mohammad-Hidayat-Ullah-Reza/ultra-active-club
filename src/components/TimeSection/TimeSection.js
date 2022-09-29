import "./TimeSection.css";
import React from "react";

const TimeSection = () => {
  return (
    <div className="aside-section">
      <div className="profile-container">
        <div>
          <img
            className="profile-pic"
            src="https://avatars.githubusercontent.com/u/91150098?v=4"
            alt="profle pic of Mohammad Hidayat"
          />
        </div>
        <div className="profile-info">
          <h5 className="profile-name">Mohammad Hidayat</h5>
          <p className="profession">aspiring frontend web developer</p>
        </div>
      </div>
      <div>
        <h4 className="select-break-time">Select Break Time</h4>
        <div className="break-time-option-container">
          <div>05s</div>
          <div>10s</div>
          <div>20s</div>
          <div>40s</div>
          <div>50s</div>
        </div>
      </div>
      <div className="exercise-time">
        Exercise Time <span></span>
      </div>
      <div className="break-time">
        Break Time <span></span>
      </div>
      <button>complete</button>
    </div>
  );
};

export default TimeSection;
