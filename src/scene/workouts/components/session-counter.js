import { useSelector } from "react-redux";

export const SessionCounter = () => {
  const [workoutsLength, currentWorkoutIndex] = useSelector(
    ({ workouts: { selectedWorkouts, currentWorkoutIndex } }) => [
      selectedWorkouts.length,
      currentWorkoutIndex,
    ]
  );
  return (
    <div className="session-counter">
      <p>
        {currentWorkoutIndex + 1} of {workoutsLength}
      </p>
      <p>Sessions</p>
    </div>
  );
};
