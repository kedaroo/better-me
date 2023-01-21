import React from "react";
import SidebarLayout from "../../components/SidebarLayout";
import { notify } from "../../helpers/notifications";

const Home = () => {
  return (
    <SidebarLayout>
      <div>Home</div>
      <button onClick={notify}>Notify</button>
    </SidebarLayout>
  );
};

export default Home;
