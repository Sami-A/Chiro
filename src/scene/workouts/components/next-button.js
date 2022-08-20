import { useSelector, useDispatch } from "react-redux";

import { moveToSelectedWorkout } from "../slice";

import Button from "skin/button";
import Next from "svg/next";

export const NextButton = () => {
  const [selectedWorkoutsLength, currentWorkoutIndex] = useSelector(
    ({ workouts }) => [
      workouts.selectedWorkouts.length,
      workouts.currentWorkoutIndex,
    ]
  );
  const { workoutDuration } = useSelector(({ settings }) => settings);

  const dispatch = useDispatch();

  function nextWorkout() {
    if (currentWorkoutIndex < selectedWorkoutsLength - 1) {
      dispatch(
        moveToSelectedWorkout({
          index: currentWorkoutIndex + 1,
          workoutDuration,
        })
      );
    }
  }

  return (
    <Button onClick={nextWorkout}>
      <Next />
    </Button>
  );
};
