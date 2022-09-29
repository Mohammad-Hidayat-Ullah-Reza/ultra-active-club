import "./Container.css";
import React, { useEffect, useState } from "react";
import TimeSection from "../TimeSection/TimeSection";
import Exercises from "../Exercises/Exercises";

const Container = () => {
  const [exercises, setExercises] = useState([]);
  const [times, setTimes] = useState([]);
  const [breakTime, setBreakTime] = useState(0);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((data) => data.json())
      .then((res) => setExercises(res))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const exists = localStorage.getItem("break-time");
    if (exists) {
      setBreakTime(exists);
    }
  }, [breakTime]);

  const handleAddTime = (getTime) => {
    const getTimeInt = parseInt(getTime);
    const timeArr = [...times, getTimeInt];
    setTimes(timeArr);
  };

  const handleBreakTime = (selectedtime) => {
    setBreakTime(selectedtime);
    localStorage.setItem("break-time", selectedtime);
  };

  return (
    <div className="container">
      <div>
        <div className="header">
          <img
            className="site-icon"
            src="https://cdn-icons-png.flaticon.com/512/5051/5051382.png"
            alt="knee icon"
          />
          <h1>Strengthen Your Knee</h1>
        </div>
        <div className="exercises-container">
          {exercises.map((exercise) => (
            <Exercises
              exercise={exercise}
              key={exercise._id}
              handleAddTime={handleAddTime}
            ></Exercises>
          ))}
        </div>
      </div>
      <TimeSection
        times={times}
        handleBreakTime={handleBreakTime}
        breakTime={breakTime}
      ></TimeSection>
    </div>
  );
};

export default Container;
