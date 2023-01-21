import React from "react";
import "./index.css";

interface Props {
  icon?: any;
  leftText: string;
  rightText: number;
}

const LogCard = ({ icon, leftText, rightText }: Props) => {
  return (
    <div className="log-card">
      <div className="log-left-con">
        {icon && <img src={icon} alt="" />}
        <span className="log-date">{leftText}</span>
      </div>
      <div className="log-value">{rightText} L</div>
    </div>
  );
};

export default LogCard;
