/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TIMER_TYPE, setTimeLeft, ALL_STATUS } from "../slice";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const CountDownCircle = () => {
  const { status, type, progress, timeLeft } = useSelector(
    (state) => state.workouts
  );

  const { workoutDuration } = useSelector((state) => state.settings);

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
        strokeWidth={10}
        styles={buildStyles({
          rotation: 1,
          strokeLinecap: "butt",
          textSize: "2rem",
          pathTransitionDuration: 0.5,
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
