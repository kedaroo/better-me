import React from "react";
import SidebarLayout from "../../components/SidebarLayout";
import { spawnNotification } from "../../helpers/notifications";

const Home = () => {
  return (
    <SidebarLayout>
      <div>Home</div>
      <button onClick={() => spawnNotification()}>Notify</button>
    </SidebarLayout>
  );
};

export default Home;
