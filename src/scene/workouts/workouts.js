import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { SelectedWorkouts } from "./components/selected-workouts";

function getPercentage(current, total) {
  const progress = (current / total) * 100;

  return progress.toFixed(0);
}

let percentage = getPercentage(0, 10);
let i = 0;
function getProgress() {
  const interval = setInterval(() => {
    i++;
    if (i > 10) {
      clearInterval(interval);
      return;
    }
    percentage = getPercentage(i, 10);
    console.log(percentage);
  }, 1000);
}

const CountDownCircle = () => (
  <div className="circle-container">
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      counterClockwise
      strokeWidth={10}
      styles={buildStyles({
        // Rotation of path and trail, in number of turns (0-1)
        rotation: 1,

        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: "butt",

        // Text size
        textSize: "1rem",

        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 0.5,

        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',

        // Colors
        pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
        textColor: "#000",
        trailColor: "blue",
        backgroundColor: "#ddd",
        //trailColor: "gold"
        pathColor: "#f88",
      })}
    />
  </div>
);

const CountDownControllers = () => (
  <div className="countdown-controllers">
    <button>R</button>
    <button>B</button>
    <button>P</button>
    <button>N</button>
  </div>
);
const SessionCounter = () => (
  <div className="session-counter">
    <p>7 of 7</p>
    <p>Sessions</p>
  </div>
);

const Timer = () => (
  <div className="timer">
    <h3>Current Exercise</h3>
    <CountDownCircle />
    <CountDownControllers />
    <SessionCounter />
  </div>
);

export const Workouts = () => {
  return (
    <>
      <SelectedWorkouts />
      <Timer />
    </>
  );
};
