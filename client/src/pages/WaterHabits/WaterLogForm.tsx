import React, { useState } from "react";
import "./index.css";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";
import SuccessModal from "../../components/SuccessModal";

const WaterLogForm = () => {
  const { user } = useAuthContext();
  const [waterQuantity, setWaterQuantity] = useState<string>("1");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await api.patch(
      "waterhabit/addlog",
      { waterQuantity },
      { headers: { Authorization: await user.getIdToken() } }
    );

    setSuccess(true);
    setLoading(false);
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
        {!loading && <button type="submit">Submit</button>}
        {loading && <button type="button">Saving...</button>}
      </form>
      {
        success && <SuccessModal />
      }
    </div>
  );
};

export default WaterLogForm;
