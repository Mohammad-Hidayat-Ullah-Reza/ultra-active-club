import "./TimeSection.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TimeSection = ({ times, handleBreakTime, breakTime }) => {
  let totalTime = 0;
  for (const time of times) {
    totalTime += time;
  }

  const notify = () =>
    toast(" Wow, You've completed all exercise!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <div className="aside-section">
      <div className="aside-section-subcontainer">
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
          <h4 className="select-break-time">Add A Break</h4>
          <div className="break-time-option-container">
            <div onClick={() => handleBreakTime("05")}>05s</div>
            <div onClick={() => handleBreakTime("10")}>10s</div>
            <div onClick={() => handleBreakTime("20")}>20s</div>
            <div onClick={() => handleBreakTime("40")}>40s</div>
            <div onClick={() => handleBreakTime("50")}>50s</div>
          </div>
        </div>
        <h4 className="exercise-details">Exercise Details</h4>
        <p className="exercise-time">
          Exercise Time: <span>{totalTime} sec</span>
        </p>
        <p className="break-time">
          Break Time: <span>{breakTime} sec</span>
        </p>
        <div>
          <button onClick={notify} className="activity-completed-btn">
            Activity Completed
          </button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default TimeSection;
