import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styled from "@emotion/styled";

import { WORKOUT_ROUTES } from "helpers/routes";

import { CurrentWorkout } from "./components/current-workout";
import { SelectedWorkouts } from "./components/selected-workouts";
import { CountDownCircle } from "./components/countdown-circle";
import { ResetButton } from "./components/reset-button";
import { BackButton } from "./components/back-button";
import { StartStopButton } from "./components/start-stop/start-stop-button";
import { NextButton } from "./components/next-button";
import { SessionCounter } from "./components/session-counter";

export const Workouts = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!WORKOUT_ROUTES.has(decodeURI(location.pathname).slice(1))) {
      navigate("/");
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <SelectedWorkouts />
      <Timer>
        <CurrentWorkout />
        <CountDownCircle />
        <div className="countdown-controllers">
          <ResetButton />
          <BackButton />
          <StartStopButton />
          <NextButton />
        </div>
        <SessionCounter />
      </Timer>
    </>
  );
};

const Timer = styled.div`
  flex-grow: 7;
  background: ${(props) => props.theme.TIMER};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;

  .countdown-controllers {
    display: flex;
    gap: 1.5rem;
  }
`;
