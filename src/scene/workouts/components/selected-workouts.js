/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getWorkouts, TIMER_TYPE } from "../slice";

import styled from "@emotion/styled";
import { useTheme, css } from "@emotion/react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export const SelectedWorkouts = () => {
  const dispatch = useDispatch();
  const { selectedWorkouts, currentWorkoutIndex, type, progress, timeLeft } =
    useSelector((state) => state.workouts);

  const { workoutDuration } = useSelector((state) => state.settings);

  const { bodyArea } = useParams();
  const location = useLocation();

  const theme = useTheme();

  useEffect(() => {
    dispatch(getWorkouts(bodyArea, workoutDuration));
  }, [location.pathname]);

  if (selectedWorkouts.length < 1) {
    return null;
  }

  return (
    <SelectedWorkout>
      <div className="selected-workout-header">
        <h3>{bodyArea} Workouts</h3>
        <span>
          {selectedWorkouts.length > 0 ? selectedWorkouts.length : 0} exercises
        </span>
      </div>

      {selectedWorkouts.length < 1 ? (
        <h3>No workouts selected</h3>
      ) : (
        selectedWorkouts.map(
          ({ workout_image, title, instructions }, index) => (
            <div
              key={index}
              className={`selected-workout-row
            ${index === currentWorkoutIndex && "selected-workout-row-active"}`}
            >
              {currentWorkoutIndex + 1 === index &&
                type === TIMER_TYPE.break && (
                  <div className="up-next-workout-indicator">
                    <span>Up-next</span>
                    <div className="tiny-circle-container">
                      <CircularProgressbar
                        value={progress}
                        text={`${timeLeft}`}
                        strokeWidth={9}
                        styles={buildStyles({
                          rotation: 1,
                          textSize: "2.5rem",
                          pathColor: theme.SURFACE2.on,
                          textColor: theme.SURFACE2.on,
                          trailColor: theme.SURFACE2.variant,
                        })}
                      />
                    </div>
                  </div>
                )}
              <img
                alt="workoutImage"
                src={require(`assets/${workout_image}`)}
                height="100px"
                width="100px"
              />
              <div>
                <h4>{title}</h4>

                <ul>
                  {instructions.map((instruction, index) => (
                    <li key={index}>
                      {index + 1}. {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        )
      )}
    </SelectedWorkout>
  );
};

const SelectedWorkout = styled.div`
  flex: 1 0 27%;
  overflow-y: auto;
  height: inherit;

  border-right: 1px solid ${({ theme }) => theme.BORDER_COLOR};

  @media (min-width: 1501px) {
    flex: 1 0 400px;
  }
  @media (max-width: 1500px) {
    flex: 1 0 35%;
  }
  @media (max-width: 1300px) {
    flex: 1 0 40%;
  }
  @media (max-width: 900px) {
    display: none;
  }

  & > h3 {
    text-align: center;
    margin-top: 2rem;
  }

  .selected-workout-header {
    text-align: center;
    padding: 1rem 0;
    font-size: 1.3rem;
    border-bottom: 1px solid ${({ theme }) => theme.BORDER_COLOR};
 }
  .selected-workout-header span {
    font-size: 1rem;
    font-weight: bold;
  }

  .selected-workout-row {
    display: flex;
    align-items: center;
    padding: 0.9rem 0.5rem;
    position: relative;
    margin: 1rem;
    border-radius: 0.7rem;
    overflow-x: hidden;

    ${({ theme }) => css`
      background: ${theme.SURFACE.main};
      box-shadow: ${theme.BOX_SHADOW} 0px 1px 3px,
        ${theme.BOX_SHADOW} 0px 1px 2px;
      -webkit-box-shadow: ${theme.BOX_SHADOW} 0px 1px 3px,
        ${theme.BOX_SHADOW} 0px 1px 2px;
      -moz-box-shadow: ${theme.BOX_SHADOW} 0px 1px 3px,
        ${theme.BOX_SHADOW} 0px 1px 2px;
    `}
  }

  .selected-workout-row-active {
    ${({ theme }) => css`
      background: ${theme.SURFACE.active};
      box-shadow: ${theme.BOX_SHADOW} 0px 1px 2px 0px,
        ${theme.BOX_SHADOW} 0px 2px 6px 2px;
      -webkit-box-shadow: ${theme.BOX_SHADOW} 0px 1px 2px 0px,
        ${theme.BOX_SHADOW} 0px 2px 6px 2px;
      -moz-box-shadow: ${theme.BOX_SHADOW} 0px 1px 2px 0px,
        ${theme.BOX_SHADOW} 0px 2px 6px 2px;
    `}
  }

  .up-next-workout-indicator {
    position: absolute;
    top: 0;
    right: 0;
    left: 0
    height: 1.7rem;
    line-height: 1.5rem;
    background: ${({ theme }) => theme.SURFACE2.main};
    color: ${({ theme }) => theme.SURFACE2.on};
    font-weight: bold;
    border-radius: 0 3px 0 3px;
    padding: 0 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center
  }
  .up-next-workout-indicator > span {
    line-height: 1rem;
    margin-right: 0.3rem;
  }

  .tiny-circle-container {
    width: 24px;
    height: 24px;

    .CircularProgressbar-text {
      dominant-baseline: middle;
      text-anchor: middle;
    }
  }

  .selected-workout-row ul {
    list-style: none;
    margin-top: 0.4rem;
  }
  .selected-workout-row li {
    margin-bottom: 0.5rem;
  }
`;
