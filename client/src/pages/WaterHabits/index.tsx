import React from "react";
import SidebarLayout from "../../components/SidebarLayout";
import Tick from "../../assets/tick.png";
import Cross from "../../assets/cross.png";
import "./index.css";
import Card from "../../components/Card";
import FoodForThoughtItem from "../../components/FoodForThoughtItem";
import LogCard from "../../components/LogCard";

const WaterHabits = () => {
  return (
    <SidebarLayout>
      <div className="container">
        <main>
          <h1>Water Habits</h1>
          <h3>Track your water intake and reach your hydration goals</h3>
          <div className="card-container">
            <Card title="Set Daily Goal" goal="I want to drink">
              <input type="number" min={1} />
              litres
            </Card>
            <Card title="Set Reminder" goal="I want to be reminded">
              every <input type="number" min={1} />
              hours
            </Card>
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
          <h2>Logs</h2>
          <LogCard icon={Tick} leftText="1 Jan" rightText="3 lit" />
          <LogCard icon={Cross} leftText="2 Jan" rightText="2 lit" />
          <LogCard leftText="No icon!" rightText="2 lit" />
        </aside>
      </div>
    </SidebarLayout>
  );
};

export default WaterHabits;
