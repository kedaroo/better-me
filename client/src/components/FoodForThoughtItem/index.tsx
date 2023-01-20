import React from "react";
import "./index.css";

interface Props {
  children: React.ReactNode;
}

const FoodForThoughtItem = ({ children }: Props) => {
  return <div className="fft-item">{children}</div>;
};

export default FoodForThoughtItem;
