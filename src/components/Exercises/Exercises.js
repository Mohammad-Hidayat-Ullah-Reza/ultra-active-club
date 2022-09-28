import "./Exercises.css";
import React from "react";

const Exercises = ({ exercise }) => {
  const { name, desc, time, img } = exercise;
  return (
    <div className="exercise-card">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="exercise-card-info">
        <h3>{name}</h3>
        <p>{desc}</p>
        <p>Time: {time}</p>
        <button>Add To List</button>
      </div>
    </div>
  );
};

export default Exercises;
