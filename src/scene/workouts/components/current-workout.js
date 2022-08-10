import { useSelector } from "react-redux";

export const CurrentWorkout = () => {
  const { selectedWorkouts, currentWorkoutIndex } = useSelector(
    ({ workouts }) => workouts
  );
  return (
    <div className="current-workout">
      <h3>Current Exercise</h3>
      <p>
        {selectedWorkouts.length > 0
          ? selectedWorkouts[currentWorkoutIndex].title
          : "No workout yet"}
      </p>
    </div>
  );
};
