import React from "react";
import { Link } from "react-router-dom";
import { notify } from "../../helpers/notifications";

const Landing = () => {
  return (
    <div>
      <Link to="/signin">Go to signin</Link>
      <button onClick={notify}>Notify</button>
    </div>
  );
};

export default Landing;
