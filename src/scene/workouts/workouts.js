import styled from "@emotion/styled";
import { CurrentWorkout } from "./components/current-workout";
import { SelectedWorkouts } from "./components/selected-workouts";
import { CountDownCircle } from "./components/countdown-circle";
import { ResetButton } from "./components/reset-button";
import { BackButton } from "./components/back-button";
import { StartStopButton } from "./components/start-stop/start-stop-button";
import { NextButton } from "./components/next-button";
import { SessionCounter } from "./components/session-counter";

export const Workouts = () => {
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

  .circle-container {
    height: 400px;
    width: 400px;
    text-align: center;

    @media (max-width: 1300px) {
      height: 350px;
      width: 350px;
    }
  }
`;
