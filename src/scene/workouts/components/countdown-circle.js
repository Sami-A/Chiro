/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "@emotion/react";

import { TIMER_TYPE, setTimeLeft, ALL_STATUS } from "../slice";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styled from "@emotion/styled";

export const CountDownCircle = () => {
  const { status, type, progress, timeLeft, selectedWorkouts } = useSelector(
    (state) => state.workouts
  );

  const { workoutDuration } = useSelector((state) => state.settings);

  const dispatch = useDispatch();

  const theme = useTheme();

  useEffect(() => {
    if (
      status === ALL_STATUS.idle &&
      type === TIMER_TYPE.workout &&
      selectedWorkouts.length > 0
    ) {
      dispatch(setTimeLeft(workoutDuration));
    }
  }, []);

  return (
    <div className="circle-container">
      <CircularProgressbarWithChildren
        value={progress}
        // text={`${selectedWorkouts.length > 0 ? timeLeft : 0}`}
        strokeWidth={9}
        styles={buildStyles({
          rotation: 1,
          strokeLinecap: "butt",
          pathTransitionDuration: 0.5,
          //pathColor: `rgba(62, 152, 199, ${progress / 100})`,
          pathColor: theme.SECONDARY.main,
          trailColor: theme.SURFACE.active,
        })}
      >
        <CircleProgressBarContent>
          <p>{`${selectedWorkouts.length > 0 ? timeLeft : 0}`}</p>
          <span>{type === TIMER_TYPE.workout ? "Exercise" : "Break"}</span>
        </CircleProgressBarContent>
      </CircularProgressbarWithChildren>
    </div>
  );
};

const CircleProgressBarContent = styled.div`
  font-weight: bold;
  & > p {
    font-size: 10rem;
  }
  & > span {
    font-size: 1.5rem;
  }
`;
