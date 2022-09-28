import "./Container.css";
import React, { useEffect, useState } from "react";
import TimeSection from "../TimeSection/TimeSection";
import Exercises from "../Exercises/Exercises";

const Container = () => {
  const [exercise, setExercise] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((data) => data.json())
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="container">
      <Exercises></Exercises>
      <TimeSection></TimeSection>
    </div>
  );
};

export default Container;
