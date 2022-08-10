import { useSelector, useDispatch } from "react-redux";

import { moveToSelectedWorkout } from "../slice";

import back from "../../../assets/back.svg";

export const BackButton = () => {
  const { currentWorkoutIndex } = useSelector(({ workouts }) => workouts);

  const dispatch = useDispatch();

  function previousWorkout() {
    if (currentWorkoutIndex > 0) {
      dispatch(moveToSelectedWorkout(currentWorkoutIndex - 1));
    }
  }

  return (
    <button onClick={previousWorkout}>
      <img src={back} alt="back" />
    </button>
  );
};
