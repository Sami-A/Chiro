import { useSelector } from "react-redux";

export const SessionCounter = () => {
  const [workoutsLength, currentWorkoutIndex] = useSelector(
    ({ workouts: { selectedWorkouts, currentWorkoutIndex } }) => [
      selectedWorkouts.length,
      currentWorkoutIndex,
    ]
  );
  return (
    <div className="text-center">
      <p>
        {workoutsLength > 0 ? currentWorkoutIndex + 1 : 0} of {workoutsLength}
      </p>
      <p>Sessions</p>
    </div>
  );
};
