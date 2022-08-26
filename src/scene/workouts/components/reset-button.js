import { useDispatch, useSelector } from "react-redux";

import { resetTimer } from "../slice";

import Button from "skin/button";
import Reload from "svg/reload";

export const ResetButton = () => {
  const { workoutDuration, breakDuration } = useSelector(
    (state) => state.settings
  );

  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(resetTimer({ workoutDuration, breakDuration }))}
    >
      <Reload />
    </Button>
  );
};
