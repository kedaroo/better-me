import React, { useEffect, useState } from "react";
import SidebarLayout from "../../components/SidebarLayout";
import Tick from "../../assets/tick.png";
import Cross from "../../assets/cross.png";
import "./index.css";
import Card from "../../components/Card";
import FoodForThoughtItem from "../../components/FoodForThoughtItem";
import LogCard from "../../components/LogCard";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";

interface Log {
  quality: number;
  _id: string;
  timestamp: string;
}

const SleepHabits = () => {
  const [goal, setGoal] = useState<number>(0);
  const [reminder, setReminder] = useState<string>("");
  const [logs, setLogs] = useState<Array<Log>>([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("sleephabit/user", {
        headers: { Authorization: await user.getIdToken() },
      });

      setGoal(res.data.data.goal);
      setReminder(res.data.data.reminderTime);
      setLogs(res.data.data.logs);
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

  const handleReminderChange = async (e: any) => {
    setReminder(e.target.value);

    const res = await api.patch(
      "sleephabit/user",
      { reminderTime: e.target.value },
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

          {/* TODO: Make horizontally scrollable */}
          <h3>Food for thought</h3>
          <div className="fft-container">
            <FoodForThoughtItem>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              commodi eum rerum neque ut explicabo repudiandae nam earum.
            </FoodForThoughtItem>
            <FoodForThoughtItem>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              commodi eum rerum neque ut explicabo repudiandae nam earum.
            </FoodForThoughtItem>
            <FoodForThoughtItem>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              commodi eum rerum neque ut explicabo repudiandae nam earum.
            </FoodForThoughtItem>
          </div>
        </main>

        <aside>
          <h2>Sleep Quality Logs</h2>

          {logs &&
            logs.map((logItem) => (
              <LogCard
                key={logItem._id}
                icon={Tick}
                leftText={new Date(logItem.timestamp).toDateString()}
                rightText={`${logItem.quality} ⭐`}
              />
            ))}
        </aside>
      </div>
    </SidebarLayout>
  );
};

export default SleepHabits;
