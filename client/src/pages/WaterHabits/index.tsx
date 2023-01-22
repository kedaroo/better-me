import React, { ChangeEventHandler, useEffect, useState } from "react";
import SidebarLayout from "../../components/SidebarLayout";
import Tick from "../../assets/tick.png";
import Cross from "../../assets/cross.png";
import "./index.css";
import Card from "../../components/Card";
import LogCard from "../../components/LogCard";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";
import FoodForThought from "../../components/FoodForThought";
import { prettifyDate } from "../../helpers/prettifyDate";

interface Log {
  waterQuantity: number;
  _id: string;
  timestamp: string;
}

const WaterHabits = () => {
  const [goal, setGoal] = useState<number>(0);
  const [reminderInterval, setReminderInterval] = useState<number>(0);
  const [logs, setLogs] = useState<Array<Log>>([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("waterhabit/user", {
        headers: { Authorization: await user?.getIdToken() },
      });

      console.log(res.data.data);

      setGoal(res.data.data.goal);
      setReminderInterval(res.data.data.reminderInterval);
      setLogs(res.data.data.logs);
    };

    fetchData();
  }, [user]);

  const decideLogIcon = (quantity: number) => {
    if (quantity > 1) {
      return Tick;
    } else {
      return Cross;
    }
  };

  const handleDailyGoalChange = async (e: any) => {
    setGoal(parseFloat(e.target.value));
    const res = await api.patch(
      "waterhabit/user",
      { goal: e.target.value },
      {
        headers: { Authorization: await user?.getIdToken() },
      }
    );
  };

  const handleReminderChange = async (e: any) => {
    setReminderInterval(parseFloat(e.target.value));
    const res = await api.patch(
      "waterhabit/user",
      { reminderInterval: e.target.value },
      {
        headers: { Authorization: await user?.getIdToken() },
      }
    );
  };

  return (
    <SidebarLayout>
      <div className="container">
        <main>
          <h1>Water Habits</h1>
          <h3>Track your water intake and reach your hydration goals</h3>
          <div className="card-container">
            <Card title="Set Daily Goal" goal="I want to drink">
              <input
                type="number"
                value={goal}
                onChange={handleDailyGoalChange}
                min={1}
              />
              litres
            </Card>
            <Card title="Set Reminder" goal="I want to be reminded">
              every{" "}
              <input
                type="number"
                value={reminderInterval}
                onChange={handleReminderChange}
                min={1}
              />
              hours
            </Card>
          </div>

          <FoodForThought category="waterHabits" />
        </main>

        <aside>
          <h2>Logs</h2>
          {logs &&
            logs.map((logItem) => (
              <LogCard
                key={logItem._id}
                icon={decideLogIcon(logItem.waterQuantity)}
                leftText={prettifyDate(logItem.timestamp)}
                rightText={`${logItem.waterQuantity.toString()} 🥛`}
              />
            ))}
        </aside>
      </div>
    </SidebarLayout>
  );
};

export default WaterHabits;
