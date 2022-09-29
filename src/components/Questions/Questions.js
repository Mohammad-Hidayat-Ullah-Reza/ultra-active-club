import "./Questions.css";
import React from "react";

const Questions = () => {
  return (
    <div className="questions-container">
      <h2>FAQ</h2>
      <div>
        <h3>How does react work?</h3>
        <p>
          React implements a virtual DOM of the actual DOM. Virtual DOM
          basically is a DOM tree tree representation in JavaScript. So when it
          needs to read or write to the DOM, it will use diff algorithm to
          compare the virtual DOM and browser's DOM. Then the virtual DOM will
          try to find the most efficient way to update the browser's DOM. Unlike
          browser DOM elements, React elements are plain objects and are cheap
          to create. React Uses Babel compiler To compile JSX into React.
          createElement API calls.
        </p>
      </div>
      <div>
        <h3>Props vs state?</h3>
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
            Props can be used with state and functional components. State can be
            used only with the state components/class component
          </li>
          <li>Props are read-only. State is both read and write.</li>
        </ol>
      </div>
      <div>
        <h3>What useEffect() is used for?</h3>
        <p>
          The motivation behind the introduction of useEffect Hook is to
          eliminate the side-effects of using class-based components. For
          example, tasks like updating the DOM, fetching data from API
          end-points, setting up subscriptions or timers, etc can be lead to
          unwarranted side-effects. Since the render method is to quick to
          produce a side-effect one needs to use life cycle methods to observe
          the side effects.
        </p>
      </div>
    </div>
  );
};

export default Questions;
