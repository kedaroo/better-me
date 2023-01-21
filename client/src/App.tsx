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

function App() {
  const { user, authIsReady } = useAuthContext();

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
