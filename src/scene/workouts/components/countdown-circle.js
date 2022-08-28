/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "@emotion/react";

import { TIMER_TYPE, setTimeLeft, ALL_STATUS } from "../slice";

import BleepSound from "assets/audio/bleep.mp3";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

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

  useEffect(() => {
    if (type === TIMER_TYPE.workout && timeLeft <= 5) {
      new Audio(BleepSound).play();
      //.catch(() => {
      // Ignore!! Bleeping sound is not that important
      //});
    }
  }, [timeLeft]);

  return (
    <CircleContainer>
      <CircularProgressbarWithChildren
        value={progress}
        strokeWidth={9}
        styles={buildStyles({
          rotation: 1,
          strokeLinecap: "butt",
          pathTransitionDuration: 0.5,
          pathColor: theme.SECONDARY.main,
          trailColor: theme.SURFACE.active,
        })}
      >
        <CircleProgressBarContent>
          <p>{`${selectedWorkouts.length > 0 ? timeLeft : 0}`}</p>
          <span>{type === TIMER_TYPE.workout ? "Exercise" : "Break"}</span>
        </CircleProgressBarContent>
      </CircularProgressbarWithChildren>
    </CircleContainer>
  );
};

const CircleContainer = styled.div`
  height: 400px;
  width: 400px;
  text-align: center;

  @media (max-width: 1300px) {
    height: 350px;
    width: 350px;
  }
  .CircularProgressbar {
    width: 100%;
    vertical-align: middle;
  }
`;

const CircleProgressBarContent = styled.div`
  font-weight: bold;
  & > p {
    font-size: 10rem;
  }
  & > span {
    font-size: 1.5rem;
  }
`;
