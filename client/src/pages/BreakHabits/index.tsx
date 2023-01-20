import React from "react";
import SidebarLayout from "../../components/SidebarLayout";
import Tick from "../../assets/tick.png";
import Cross from "../../assets/cross.png";
import "./index.css";
import Card from "../../components/Card";
import FoodForThoughtItem from "../../components/FoodForThoughtItem";
import LogCard from "../../components/LogCard";

const BreakHabits = () => {
  return (
    <SidebarLayout>
      <div className="container">
        <main>
          <h1>Break Habits</h1>
          <h3>Take the breaks you need, work more effectively</h3>
          <div className="card-container">
            <Card title="Reminders" goal="Remind me to take breaks">
              every <input type="number" min={1} />
              hours
            </Card>
            <div className="mycard">
              <div className="title">Stuff to do in break</div>
              <div>Meditation TODO show links</div>
              <div>Music</div>
              <div>Games</div>
            </div>
          </div>

          {/* TODO: Make horizontally scrollable */}
          <h3>Food for thought</h3>
          <div className="fft-container">
            <FoodForThoughtItem>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              commodi eum rerum neque ut explicabo repudiandae nam earum.
            </FoodForThoughtItem>
            <FoodForThoughtItem>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              commodi eum rerum neque ut explicabo repudiandae nam earum.
            </FoodForThoughtItem>
            <FoodForThoughtItem>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              commodi eum rerum neque ut explicabo repudiandae nam earum.
            </FoodForThoughtItem>
          </div>
        </main>

        <aside>
          <h2>Break Logs</h2>
          <LogCard leftText="1 Jan" rightText="3 breaks" />
          <LogCard leftText="2 Jan" rightText="2 breaks" />
        </aside>
      </div>
    </SidebarLayout>
  );
};

export default BreakHabits;
