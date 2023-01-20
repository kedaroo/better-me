import React from "react";
import Sidebar from "../Sidebar";
import "./index.css";

interface Props {
  children: React.ReactNode;
}

const SidebarLayout = ({ children }: Props) => {
  return (
    <div className="sidebar-layout">
      <div>
        <Sidebar />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SidebarLayout;
