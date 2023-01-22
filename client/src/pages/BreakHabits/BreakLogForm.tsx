import React, { useState } from "react";
import "./index.css";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";
import SuccessModal from "../../components/SuccessModal";

const BreakLogForm = () => {
  const { user } = useAuthContext();
  const [activity, setActivity] = useState<string>("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const res = await api.patch(
      "breakhabit/addlog",
      { activity },
      { headers: { Authorization: await user.getIdToken() } }
    );

    setLoading(false);
    setSuccess(true);

  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleFormSubmit}>
        <h1>Break Time!</h1>
        <h3>What are you going to do now?</h3>
        <div className="radio-group">
          <label htmlFor="meditation">
            <input
              type="radio"
              id="meditation"
              name="activity"
              value="meditation"
              onChange={(e) => setActivity(e.target.value)}
              required
            />
            Meditation
          </label>

          <label htmlFor="music">
            <input
              type="radio"
              id="music"
              name="activity"
              onChange={(e) => setActivity(e.target.value)}
              value="music"
            />
            Music
          </label>

          <label htmlFor="walking">
            <input
              onChange={(e) => setActivity(e.target.value)}
              type="radio"
              id="walking"
              name="activity"
              value="walking"
            />
            Walking
          </label>

          <label htmlFor="other">
            <input
              onChange={(e) => setActivity(e.target.value)}
              type="radio"
              id="other"
              name="activity"
              value="other"
            />
            Other
          </label>
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

export default BreakLogForm;
