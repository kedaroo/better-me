import React, { useEffect, useState } from "react";
import SidebarLayout from "../../components/SidebarLayout";
import "./index.css";
import Card from "../../components/Card";
import LogCard from "../../components/LogCard";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";
import FoodForThought from "../../components/FoodForThought";
import MeditationIcon from "../../assets/breakHabits/meditation.png";
import MusicIcon from "../../assets/breakHabits/music.png";
import WalkingIcon from "../../assets/breakHabits/walking.png";
import OtherIcon from "../../assets/breakHabits/other.png";
import { prettifyDate } from "../../helpers/prettifyDate";

interface Log {
  activity: string;
  timestamp: string;
  _id: string;
}

const BreakHabits = () => {
  const [reminder, setReminder] = useState<number>(0);
  const [logs, setLogs] = useState<Array<Log>>([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("breakhabit/user", {
        headers: { Authorization: await user.getIdToken() },
      });

      setReminder(res.data.data.reminderInterval);
      setLogs(res.data.data.logs);
    };

    fetchData();
  }, [user]);

  const decideActivityIcon = (activity: string) => {
    switch (activity) {
      case "meditation":
        return MeditationIcon;

      case "walking":
        return WalkingIcon;

      case "music":
        return MusicIcon;

      default:
        return OtherIcon;
    }
  };

  const handleReminderChange = async (e: any) => {
    setReminder(parseFloat(e.target.value));

    const res = await api.patch(
      "breakhabit/user",
      { reminderInterval: e.target.value },
      { headers: { Authorization: await user.getIdToken() } }
    );
  };

  return (
    <SidebarLayout>
      <div className="container">
        <main>
          <h1>Break Habits</h1>
          <h3>Take the breaks you need, work more effectively</h3>
          <div className="card-container">
            <Card title="Reminders" goal="Remind me to take breaks">
              every{" "}
              <input
                type="number"
                value={reminder}
                onChange={handleReminderChange}
                min={1}
              />
              hours
            </Card>
            <div className="mycard">
              <div className="title">Stuff to do in break</div>
              <div>Meditation TODO show links</div>
              <div>Music</div>
              <div>Games</div>
            </div>
          </div>

          <FoodForThought category="breakHabits" />
        </main>

        <aside>
          <h2>Break Logs</h2>
          {logs &&
            logs.map((logItem) => (
              <LogCard
                key={logItem._id}
                icon={decideActivityIcon(logItem.activity)}
                leftText={prettifyDate(logItem.timestamp)}
                rightText={logItem.activity}
              />
            ))}
        </aside>
      </div>
    </SidebarLayout>
  );
};

export default BreakHabits;
