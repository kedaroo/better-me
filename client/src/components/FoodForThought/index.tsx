import React from "react";
import FoodForThoughtItem from "../FoodForThoughtItem";
import { data } from "./data";

const FoodForThought = ({ category = "waterHabits" }) => {
  console.log(category);
  return (
    <div>
      <h3>Food for thought</h3>
      <div className="fft-container">
        {data[category].map((item: any) => {
          return <FoodForThoughtItem>
            <div style={{fontSize: "1.5rem", marginBottom: "1rem"}}>{item.emoji}</div>
            <div>{item.thought}</div>
          </FoodForThoughtItem>;
        })}
      </div>
    </div>
  );
};

export default FoodForThought;
