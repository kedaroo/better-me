import React, { useEffect, useState } from "react";
import SidebarLayout from "../../components/SidebarLayout";
import { spawnNotification } from "../../helpers/notifications";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./index.css";
import ConsistencyGraph from "./ConsistencyGraph";
import { LineChart } from "./LineChart";

interface Props {
  handleStartNotification: () => void;
  appUser: any;
  waterHabits: any;
  sleepHabits: any;
  breakHabits: any;
}

const Home = ({
  handleStartNotification,
  appUser,
  waterHabits,
  sleepHabits,
  breakHabits,
}: Props) => {
  const { user, notificationIntervals } = useAuthContext();
  const [started, setStarted] = useState(false)

  const handleStopNotification = () => {
    for (let i = 0; i < notificationIntervals.length; i++) {
      clearInterval(notificationIntervals[i]);
    }
  };

  return (
    <SidebarLayout>
      <div className="home">
        <h1>Hello {appUser?.name} 👋</h1>
        <div className="wrapper">
          <div>
            <div className="graph-row">
              <div className="breaks">

                <div className="break"><span>Water breaks:</span> {waterHabits?.reminderInterval ? waterHabits.reminderInterval : "1"} hour</div>
                <div className="break"><span>Work breaks:</span> {breakHabits?.reminderInterval ? breakHabits.reminderInterval : "1"} hour</div>

                {!started && <button className="start-btn" onClick={() => {
                  handleStartNotification();
                  setStarted(true);
                }}>Start</button>}
                {started && <button className="start-btn" disabled>Started</button>}
              </div>
              <div className="line-chart">
                <LineChart progress={waterHabits?.logs}/>
              </div>
            </div>
            <div className="stats-row">
              <section className="quality-graph">
                <h2>Your sleep quality: </h2>
                <ConsistencyGraph progress={sleepHabits?.logs} />
              </section>
            </div>
          </div>
          <div>
            <h2>Stats</h2>
          </div>
        </div>

      </div>
      {/* <div>Home</div>
      <button onClick={handleStartNotification}>Start Notifications</button>
      <button onClick={handleStopNotification}>Stop Notifications</button> */}
    </SidebarLayout>
  );
};

export default Home;
