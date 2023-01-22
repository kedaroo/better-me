import React, { useEffect, useState } from "react";
import { getProgressByDayNumber } from "./utils";

const ConsistencyGraph = ({ progress = [] }) => {
  const [levelsData, setLevelsData] = useState<any>();

  useEffect(() => {
    const data = getProgressByDayNumber(progress);
    let levels = []
    console.log("here, ", progress)
    for (var i = 1; i < 365; i++) {
      const level = Math.floor(data[i]);  
      levels.push(level)
    }
    setLevelsData(levels);
  }, [progress]);

  useEffect(() => {
    if (levelsData) {
      const squares = document.querySelector(".squares");
      squares.innerHTML = "";
      for (let i = 1; i < 365; i++) {
        const level = levelsData[i];

        squares.insertAdjacentHTML(
          "beforeend",
          `<li data-level="${level}"></li>`
        );
      }
    } else  {
      const squares = document.querySelector(".squares");
      squares.innerHTML = "";
      for (let i = 1; i < 365; i++) {

        squares.insertAdjacentHTML(
          "beforeend",
          `<li data-level="${0}"></li>`
        );
      }
    }
  }, [progress, levelsData]);

  return (
    <div>
      <div className="graph">
        <ul className="squares"></ul>
      </div>
    </div>
  );
};

export default ConsistencyGraph;
