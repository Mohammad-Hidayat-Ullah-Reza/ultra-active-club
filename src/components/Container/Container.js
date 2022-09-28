import "./Container.css";
import React, { useEffect, useState } from "react";
import TimeSection from "../TimeSection/TimeSection";
import Exercises from "../Exercises/Exercises";

const Container = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((data) => data.json())
      .then((res) => setExercises(res))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="container">
      <div className="exercises-container">
        {exercises.map((exercise) => (
          <Exercises exercise={exercise} key={exercise._id}></Exercises>
        ))}
      </div>
      <TimeSection></TimeSection>
    </div>
  );
};

export default Container;
