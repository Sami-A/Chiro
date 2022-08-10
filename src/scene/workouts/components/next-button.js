import { useSelector, useDispatch } from "react-redux";

import { moveToSelectedWorkout } from "../slice";

import next from "../../../assets/next.svg";

export const NextButton = () => {
  const [selectedWorkoutsLength, currentWorkoutIndex] = useSelector(
    ({ workouts }) => [
      workouts.selectedWorkouts.length,
      workouts.currentWorkoutIndex,
    ]
  );
  const dispatch = useDispatch();

  function nextWorkout() {
    if (currentWorkoutIndex < selectedWorkoutsLength - 1) {
      dispatch(moveToSelectedWorkout(currentWorkoutIndex + 1));
    }
  }

  return (
    <button onClick={nextWorkout}>
      <img src={next} alt="next" />
    </button>
  );
};
