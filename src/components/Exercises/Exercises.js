import "./Exercises.css";
import React from "react";

const Exercises = ({ exercise, handleAddTime }) => {
  const { name, desc, time, img } = exercise;
  return (
    <div className="exercise-card">
      <div>
        <img className="exercise-card-img" src={img} alt="" />
      </div>
      <div className="exercise-card-body">
        <div className="exercise-card-info">
          <h3>{name}</h3>
          <p>{desc}</p>
          <p>
            <span className="time">Time:</span> {time} sec
          </p>
        </div>
        <div className="exercise-card-add-btn-container">
          <button
            onClick={() => handleAddTime(time)}
            className="exercise-card-add-btn"
          >
            Add To List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
