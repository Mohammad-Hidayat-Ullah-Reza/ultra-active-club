import "./Questions.css";
import React from "react";

const Questions = () => {
  return (
    <div>
      <div>
        <h3>How does react work?</h3>
        <p>
          <ol>
            <li>
              Props data is passed from one component to another. While the data
              of State is passed within the component only.
            </li>
            <li>
              Props is Immutable (cannot be modified). State is Mutable ( can be
              modified).
            </li>
            <li>
              Props can be used with state and functional components. State can
              be used only with the state components/class component
            </li>
            <li>Props are read-only. State is both read and write.</li>
          </ol>
        </p>
      </div>
      <div>
        <h3>props vs state?</h3>
        <p></p>
      </div>
      <div>
        <h3>what useEffect is used for?</h3>
        <p></p>
      </div>
    </div>
  );
};

export default Questions;
