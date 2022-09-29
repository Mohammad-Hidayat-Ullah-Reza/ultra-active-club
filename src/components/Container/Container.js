import "./Container.css";
import React, { useEffect, useState } from "react";
import TimeSection from "../TimeSection/TimeSection";
import Exercises from "../Exercises/Exercises";

const Container = () => {
  const [exercises, setExercises] = useState([]);
  const [times, setTimes] = useState([]);
  const [breaktime, setBreakTime] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((data) => data.json())
      .then((res) => setExercises(res))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const exists = localStorage.getItem("break-time");
    console.log(exists);
  }, [breaktime]);

  const handleAddTime = (getTime) => {
    const getTimeInt = parseInt(getTime);
    const timeArr = [...times, getTimeInt];
    setTimes(timeArr);
  };

  const handleBreakTime = (time) => {
    setBreakTime(time);
    localStorage.setItem("break-time", time);
  };

  return (
    <div className="container">
      <div className="exercises-container">
        {exercises.map((exercise) => (
          <Exercises
            exercise={exercise}
            key={exercise._id}
            handleAddTime={handleAddTime}
          ></Exercises>
        ))}
      </div>
      <TimeSection
        times={times}
        handleBreakTime={handleBreakTime}
      ></TimeSection>
    </div>
  );
};

export default Container;
