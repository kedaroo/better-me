import React from "react";
import { Link } from "react-router-dom";
import { spawnNotification } from "../../helpers/notifications";

const Landing = () => {
  return (
    <div>
      <Link to="/signin">Go to signin</Link>
      <button onClick={() => spawnNotification()}>Notify</button>
    </div>
  );
};

export default Landing;
