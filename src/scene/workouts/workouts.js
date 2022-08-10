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
      <div className="timer">
        <CurrentWorkout />
        <CountDownCircle />
        <div className="countdown-controllers">
          <ResetButton />
          <BackButton />
          <StartStopButton />
          <NextButton />
        </div>
        <SessionCounter />
      </div>
    </>
  );
};
