import "./App.css";
import React, { useState, useEffect } from "react";
import Die from "./Die.jsx";

function App() {
  const [allDice, setAllDice] = useState(allNewDice());
  const [rolls, setRolls] = useState(0);
  const [tenzies, setTenzies] = useState(false);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: i,
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }
    return newDice;
  }
  function rollDice() {
    setRolls((prev) => prev + 1);
    setAllDice((prev) =>
      prev.map((d) => {
        return d.isHeld === false
          ? { ...d, value: Math.ceil(Math.random() * 6) }
          : d;
      })
    );
  }
  function holdDie(id) {
    setAllDice((prev) =>
      prev.map((d) => {
        return d.id === id ? { ...d, isHeld: !d.isHeld } : d;
      })
    );
  }

  const dice = allDice.map((d) => (
    <Die
      key={d.id}
      value={d.value}
      isHeld={d.isHeld}
      holdDie={() => holdDie(d.id)}
    />
  ));
  useEffect(() => {
    const allHeld = allDice.every((d) => d.isHeld);
    const firstValue = allDice[0].value;
    const allValue = allDice.every((d) => d.value === firstValue);
    if (allHeld && allValue) {
      setTenzies(true);
      console.log("You WON!");
    }
  }, [allDice]);
  function resetGame() {
    setAllDice(allNewDice());
    setTenzies(false);
  }
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
          <div className="dice--box">{dice}</div>
          <div>
            {tenzies ? (
              <div className="roll--button" onClick={resetGame}>
                New Game
              </div>
            ) : (
              <div className="roll--button" onClick={rollDice}>
                Roll
              </div>
            )}
            <div className="rolls">Rolls: {rolls}</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
