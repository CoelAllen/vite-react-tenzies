import "./App.css";
import React from "react";
import Die from "./Die.jsx";

function App() {
  return (
    <main>
      <div className="border--box">
        <div className="inner--box">
          <div className="text--box">
            <h1>Tenzies</h1>
            <p className="description">
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
          </div>
          <div className="dice--box">
            <Die />
            <Die />
            <Die />
            <Die />
            <Die />
            <Die />
            <Die />
            <Die />
            <Die />
            <Die />
          </div>
          <div>Roll button go here</div>
        </div>
      </div>
    </main>
  );
}

export default App;
