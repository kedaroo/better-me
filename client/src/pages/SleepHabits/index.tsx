import React, { useEffect, useState } from "react";
import SidebarLayout from "../../components/SidebarLayout";
import HappyFace from "../../assets/sleepHabits/happy.png";
import SadFace from "../../assets/sleepHabits/sad.png";
import AverageFace from "../../assets/sleepHabits/average.png";
import "./index.css";
import Card from "../../components/Card";
import LogCard from "../../components/LogCard";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";
import FoodForThought from "../../components/FoodForThought";
import Modal from "../../components/Modal";
import { Rating } from "react-simple-star-rating";
import { prettifyDate } from "../../helpers/prettifyDate";

interface Log {
  quality: number;
  _id: string;
  timestamp: string;
}

const SleepHabits = () => {
  const [goal, setGoal] = useState<number>(0);
  const [reminder, setReminder] = useState<string>("");
  const [logs, setLogs] = useState<Array<Log>>([]);
  const [showModal, setShowModal] = useState<boolean>(true);
  const [rating, setRating] = useState<number>(0);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("sleephabit/user", {
        headers: { Authorization: await user.getIdToken() },
      });

      setGoal(res.data.data.goal);
      setReminder(res.data.data.reminderTime);
      setLogs(res.data.data.logs);
      for (let i = res.data.data.logs.length - 1; i >= 0; i--) {
        if (
          new Date(res.data.data.logs[i].timestamp).toLocaleDateString() ===
          new Date(Date.now()).toLocaleDateString()
        ) {
          setShowModal(false);
        }
      }
    };

    fetchData();
  }, []);

  const handleDailyGoalChange = async (e: any) => {
    setGoal(parseFloat(e.target.value));

    const res = await api.patch(
      "sleephabit/user",
      { goal: e.target.value },
      { headers: { Authorization: await user.getIdToken() } }
    );
  };

  const decideFaceMood = (quality: number) => {
    if (quality < 3) {
      return SadFace;
    } else if (quality === 3) {
      return AverageFace;
    } else {
      return HappyFace;
    }
  };

  const handleReminderChange = async (e: any) => {
    setReminder(e.target.value);

    const res = await api.patch(
      "sleephabit/user",
      { reminderTime: e.target.value },
      { headers: { Authorization: await user.getIdToken() } }
    );
  };

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleCloseModal = async () => {
    setShowModal(false);
    await api.patch(
      "sleephabit/addlog",
      { quality: rating },
      { headers: { Authorization: await user.getIdToken() } }
    );
  };

  return (
    <SidebarLayout>
      <div className="container">
        <main>
          <h1>Sleep Habits</h1>
          <h3>Get the rest you need, track your sleep with ease</h3>
          <div className="card-container">
            <Card title="Set Daily Goal" goal="I want to sleep for">
              <input
                type="number"
                value={goal}
                onChange={handleDailyGoalChange}
                min={1}
              />
              hours
            </Card>
            <Card title="Bedtime Reminder" goal="I want to be reminded at">
              <input
                type="time"
                value={reminder}
                onChange={handleReminderChange}
                style={{ width: "160px" }}
              />
            </Card>
          </div>

          <FoodForThought category="sleepingHabits" />
        </main>

        <aside>
          <h2>Sleep Quality Logs</h2>

          {logs &&
            logs.map((logItem) => (
              <LogCard
                key={logItem._id}
                icon={decideFaceMood(logItem.quality)}
                leftText={prettifyDate(logItem.timestamp)}
                rightText={`${logItem.quality} ⭐`}
              />
            ))}
        </aside>
      </div>

      {showModal && (
        <Modal closeModal={handleCloseModal}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
              padding: "1rem 0",
            }}
          >
            <h1>Hey {user.displayName} 👋</h1>
            <div style={{ fontWeight: 600, fontSize: "1.5rem" }}>
              How well did you sleep?
            </div>
            <Rating onClick={handleRating} transition={true} size={60} />
            <button className="modal-button" onClick={handleCloseModal}>
              Submit
            </button>
          </div>
        </Modal>
      )}
    </SidebarLayout>
  );
};

export default SleepHabits;
