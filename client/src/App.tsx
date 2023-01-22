import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import BreakHabits from "./pages/BreakHabits";
import BreakLogForm from "./pages/BreakHabits/BreakLogForm";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import SleepHabits from "./pages/SleepHabits";
import WaterHabits from "./pages/WaterHabits";
import WaterLogForm from "./pages/WaterHabits/WaterLogForm";
import { useAuthContext } from "./hooks/useAuthContext";
import { useEffect, useState } from "react";
import api from "./api";
import { spawnNotification } from "./helpers/notifications";

function App() {
  // @ts-ignore
  const { user, authIsReady, dispatch } = useAuthContext();
  const [appUser, setAppUser] = useState(null);
  const [waterHabits, setWaterHabits] = useState(null);
  const [sleepHabits, setSleepHabits] = useState(null);
  const [breakHabits, setBreakHabits] = useState(null);

  useEffect(() => {
    Notification.requestPermission().then((result) => {});

    navigator.serviceWorker.register("sw.js");

    const fetchData = async () => {
      const res = await api.get("user/stats", {
        headers: { Authorization: await user.getIdToken() },
      });

      setAppUser(res.data.user);
      setBreakHabits(res.data.breakHabits.data);
      setSleepHabits(res.data.sleepHabits.data);
      setWaterHabits(res.data.waterHabits.data);

      console.log(res.data.waterHabits.data);
    };

    user && fetchData();
  }, [user]);

  const handleStartNotifications = () => {
    console.log(
      `Water notifications registered for ${
        waterHabits.reminderInterval * 60 * 60 * 1000
      } secs`
    );
    const waterNotifications = setInterval(
      () =>
        spawnNotification(
          "Time to hydrate yourself!",
          "Water Break!",
          "http://localhost:5173/WaterHabits/addLog"
        ),
        (waterHabits.reminderInterval ? waterHabits.reminderInterval : 1) * 60 * 60 * 1000
    );

    console.log(
      `Break notifications registered for ${
        breakHabits.reminderInterval * 60 * 60 * 1000
      } secs`
    );
    const breakNotifications = setInterval(() => {
      spawnNotification(
        "Unwind from your work and relax!",
        "Break time!",
        "http://localhost:5173/BreakHabits/addBreak"
      );
    }, (breakHabits.reminderInterval ? breakHabits.reminderInterval : 1) * 60 * 60 * 1000);

    console.log([waterNotifications, breakNotifications]);
    dispatch({
      type: "NOTIFICATION_INTERVALS",
      payload: [waterNotifications, breakNotifications],
    });
  };

  return (
    <>
      {authIsReady && (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/signin"
            element={user ? <Navigate to="/home" /> : <Signin />}
          />
          <Route
            path="/home"
            element={
              user ? (
                <Home
                  handleStartNotification={handleStartNotifications}
                  appUser={appUser}
                  breakHabits={breakHabits}
                  sleepHabits={sleepHabits}
                  waterHabits={waterHabits}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/BreakHabits"
            element={user ? <BreakHabits /> : <Navigate to="/" />}
          />
          <Route
            path="/BreakHabits/addBreak"
            element={user ? <BreakLogForm /> : <Navigate to="/" />}
          />
          <Route
            path="/SleepHabits"
            element={user ? <SleepHabits /> : <Navigate to="/" />}
          />
          <Route
            path="/WaterHabits"
            element={user ? <WaterHabits /> : <Navigate to="/" />}
          />
          <Route
            path="/WaterHabits/addLog"
            element={user ? <WaterLogForm /> : <Navigate to="/" />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
