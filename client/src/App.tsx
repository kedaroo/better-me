import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import BreakHabits from "./pages/BreakHabits";
import BreakLogForm from "./pages/BreakHabits/BreakLogForm";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import SleepHabits from "./pages/SleepHabits";
import WaterHabits from "./pages/WaterHabits";
import { useAuthContext } from "./hooks/useAuthContext";
import { useEffect } from "react";

function App() {
  const { user, authIsReady } = useAuthContext();

  useEffect(() => {
    navigator.serviceWorker.register("sw.js");
  }, [])

  return (
    <>
      {authIsReady && (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/signin"
            element={user ? <Navigate to="/home" /> : <Signin />}
          />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
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
        </Routes>
      )}
    </>
  );
}

export default App;
