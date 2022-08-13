import { useDispatch, useSelector } from "react-redux";

import { resetTimer } from "../slice";

import Reload from "../../../svg/reload";

export const ResetButton = () => {
  const { workoutDuration, breakDuration } = useSelector(
    (state) => state.settings
  );

  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(resetTimer({ workoutDuration, breakDuration }))}
    >
      <Reload />
    </button>
  );
};
