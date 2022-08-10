/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TIMER_TYPE, setTimeLeft, ALL_STATUS } from "../slice";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const CountDownCircle = () => {
  const { status, type, progress, timeLeft, workoutDuration } = useSelector(
    (state) => state.workouts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === ALL_STATUS.idle && type === TIMER_TYPE.workout) {
      dispatch(setTimeLeft(workoutDuration));
    }
  }, []);

  return (
    <div className="circle-container">
      <CircularProgressbar
        value={progress}
        text={`${timeLeft}`}
        // counterClockwise
        strokeWidth={10}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 1,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",

          // Text size
          textSize: "2rem",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          //pathColor: `rgba(62, 152, 199, ${progress / 100})`,
          pathColor: "blue",
          textColor: "#000",
          trailColor: "#f88",
          backgroundColor: "#ddd",
        })}
      />
    </div>
  );
};
