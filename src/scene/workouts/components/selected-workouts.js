import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getWorkouts } from "../slice";

export const SelectedWorkouts = () => {
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workouts.selectedWorkouts);

  const { bodyArea } = useParams();
  const location = useLocation();

  useEffect(() => {
    dispatch(getWorkouts(bodyArea));
  }, [location]);

  return (
    <div className="selected-workout">
      <h3>Selected Workout</h3>
      {workouts.length < 1 ? (
        <h3>No workout</h3>
      ) : (
        workouts.map(({ title, description }, index) => (
          <div key={index} className="selected-workout-row">
            <img
              alt="workoutImage"
              src="./logo512.png"
              height="100px"
              width="100px"
            />
            <div>
              <h6>{title}</h6>
              <p>{description}</p>
              <button>More</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
