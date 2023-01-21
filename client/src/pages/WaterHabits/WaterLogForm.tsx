import React, { useState } from "react";
import "./index.css";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";

const WaterLogForm = () => {
  const { user } = useAuthContext();
  const [waterQuantity, setWaterQuantity] = useState<string>("1");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const res = await api.patch(
      "waterhabit/addlog",
      { waterQuantity },
      { headers: { Authorization: await user.getIdToken() } }
    );

    console.log(`${waterQuantity} submited`);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleFormSubmit}>
        <h1>Water Break Time!</h1>
        <h3>What many glasses of water are you going to drink?</h3>
        <div className="input-container">
          <input
            type="number"
            min={1}
            onChange={(e) => setWaterQuantity(e.target.value)}
            value={waterQuantity}
          />{" "}
          glasses
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WaterLogForm;
