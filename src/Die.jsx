import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59e391" : "white",
  };
  const dieFace = {};
  return (
    <div className="die--main">
      <div className="die--box" style={styles} onClick={props.holdDie}>
        <div style={dieFace}>{props.value}</div>
      </div>
    </div>
  );
}
