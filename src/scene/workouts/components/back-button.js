import { useSelector, useDispatch } from "react-redux";

import { moveToSelectedWorkout } from "../slice";

import Back from "../../../svg/back";

export const BackButton = () => {
  const { currentWorkoutIndex } = useSelector(({ workouts }) => workouts);
  const { workoutDuration } = useSelector(({ settings }) => settings);

  const dispatch = useDispatch();

  function previousWorkout() {
    if (currentWorkoutIndex > 0) {
      dispatch(
        moveToSelectedWorkout({
          index: currentWorkoutIndex - 1,
          workoutDuration,
        })
      );
    }
  }

  return (
    <button onClick={previousWorkout}>
      <Back />
    </button>
  );
};
