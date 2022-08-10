import { useSelector, useDispatch } from "react-redux";
import {
  ALL_STATUS,
  TIMER_TYPE,
  setStatus,
  setProgress,
  setTimeLeft,
  saveInterval,
  pauseTimer,
  setNextTimer,
} from "../../slice";

import { PlayPauseIcon } from "./play-pause-icon";

export const StartStopButton = () => {
  const dispatch = useDispatch();
  const { status, type, timeLeft, workoutDuration, breakDuration } =
    useSelector((state) => state.workouts);

  function startWorkoutTimer() {
    if (status === ALL_STATUS.started) return;

    dispatch(setStatus(ALL_STATUS.started));

    let duration =
      type === TIMER_TYPE.workout ? workoutDuration : breakDuration;

    let calculatedTimeLeft;
    if (timeLeft) calculatedTimeLeft = timeLeft - 1;
    else {
      calculatedTimeLeft = duration - 1;
    }

    let calculatedProgress = calculateProgress(calculatedTimeLeft, duration);

    dispatch(setProgress(calculatedProgress));
    dispatch(setTimeLeft(calculatedTimeLeft));

    const interval = setInterval(() => {
      if (calculatedTimeLeft > 0) {
        --calculatedTimeLeft;
        calculatedProgress = calculateProgress(calculatedTimeLeft, duration);

        dispatch(setProgress(calculatedProgress));
        dispatch(setTimeLeft(calculatedTimeLeft));
        return;
      }
      clearInterval(interval);

      dispatch(setNextTimer());
    }, 1000);
    dispatch(saveInterval(interval));
  }

  function calculateProgress(currentTime, totalWorkoutDuration) {
    const progress = (currentTime / totalWorkoutDuration) * 100;

    return progress.toFixed(0);
  }

  if (status !== ALL_STATUS.started) {
    return (
      <button onClick={startWorkoutTimer}>
        <PlayPauseIcon path={playPauseProps.play} />
      </button>
    );
  }
  return (
    <button onClick={() => dispatch(pauseTimer())}>
      <PlayPauseIcon path={playPauseProps.pause} />
    </button>
  );
};

const playPauseProps = {
  play: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z",
  pause: "M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z",
};
