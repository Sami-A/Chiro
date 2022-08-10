/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getWorkouts, TIMER_TYPE } from "../slice";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export const SelectedWorkouts = () => {
  const dispatch = useDispatch();
  const { selectedWorkouts, currentWorkoutIndex, type, progress, timeLeft } =
    useSelector((state) => state.workouts);

  const { bodyArea } = useParams();
  const location = useLocation();

  useEffect(() => {
    dispatch(getWorkouts(bodyArea));
  }, [location]);

  return (
    <div className="selected-workout">
      <h3>Selected Workout</h3>
      {selectedWorkouts.length < 1 ? (
        <h3>No workout</h3>
      ) : (
        selectedWorkouts.map(({ title, description }, index) => (
          <div
            key={index}
            className={`selected-workout-row
            ${index === currentWorkoutIndex && "selected-workout-row-active"}`}
          >
            {currentWorkoutIndex + 1 === index && type === TIMER_TYPE.break && (
              <div className="up-next-workout-indicator">
                <span>Up-next</span>
                <div style={{ width: 24, height: 24, float: "right" }}>
                  <CircularProgressbar
                    value={progress}
                    text={`${timeLeft}`}
                    strokeWidth={9}
                    styles={buildStyles({
                      rotation: 1,
                      textSize: "2rem",
                      textColor: "#000",
                      pathColor: "#f88",
                      trailColor: "blue",
                      backgroundColor: "#ddd",
                    })}
                  />
                </div>
              </div>
            )}
            <img
              alt="workoutImage"
              src="./logo512.png"
              height="100px"
              width="100px"
            />
            <div>
              <h6>{title}</h6>
              <p>{description}</p>
              <button>More</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
