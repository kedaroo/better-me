import React, { useEffect, useState } from "react";
import SidebarLayout from "../../components/SidebarLayout";
import { spawnNotification } from "../../helpers/notifications";
import api from "../../api";
import { useAuthContext } from "../../hooks/useAuthContext";

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

  const handleStopNotification = () => {
    for (let i = 0; i < notificationIntervals.length; i++) {
      clearInterval(notificationIntervals[i]);
    }
  };

  return (
    <SidebarLayout>
      <div>Home</div>
      <button onClick={handleStartNotification}>Start Notifications</button>
      <button onClick={handleStopNotification}>Stop Notifications</button>
    </SidebarLayout>
  );
};

export default Home;
