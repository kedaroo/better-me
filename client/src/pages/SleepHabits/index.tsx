import React from "react";
import SidebarLayout from "../../components/SidebarLayout";
import Tick from "../../assets/tick.png";
import Cross from "../../assets/cross.png";
import "./index.css";
import Card from "../../components/Card";
import FoodForThoughtItem from "../../components/FoodForThoughtItem";
import LogCard from "../../components/LogCard";

const SleepHabits = () => {
  return (
    <SidebarLayout>
      <div className="container">
        <main>
          <h1>Sleep Habits</h1>
          <h3>Get the rest you need, track your sleep with ease</h3>
          <div className="card-container">
            <Card title="Set Daily Goal" goal="I want to sleep for">
              <input type="number" min={1} />
              hours
            </Card>
            <Card title="Bedtime Reminder" goal="I want to be reminded at">
              <input type="number" min={1} />
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
          <h2>Sleep Quality Logs</h2>
          <LogCard icon={Tick} leftText="1 Jan" rightText="3 ⭐" />
          <LogCard icon={Cross} leftText="2 Jan" rightText="2 ⭐" />
        </aside>
      </div>
    </SidebarLayout>
  );
};

export default SleepHabits;
