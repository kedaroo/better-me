import React from "react";
import "./index.css";

interface Props {
  title: string;
  goal: string;
  children: React.ReactNode;
}

const Card = ({ title, goal, children }: Props) => {
  return (
    <div className="mycard">
      <div className="title">{title}</div>
      <div className="goal">{goal}</div>
      <div className="input">{children}</div>
      <div>everyday</div>
    </div>
  );
};

export default Card;
