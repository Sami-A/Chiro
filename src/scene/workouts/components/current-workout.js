import { useSelector } from "react-redux";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const CurrentWorkout = () => {
  const { selectedWorkouts, currentWorkoutIndex } = useSelector(
    ({ workouts }) => workouts
  );
  return (
    <CurrentWorkoutContainer>
      <h3>Current Exercise</h3>
      <div>
        {selectedWorkouts.length > 0 ? (
          <>
            <img
              alt="workoutImage"
              src={require(`../../../assets/${selectedWorkouts[currentWorkoutIndex].workout_image}`)}
              height="100px"
              width="100px"
            />
            <div className="card-text">
              <h4>{selectedWorkouts[currentWorkoutIndex].title}</h4>
              <p>
                {selectedWorkouts[currentWorkoutIndex].description.length > 200
                  ? `${selectedWorkouts[
                      currentWorkoutIndex
                    ].description.substring(0, 200)}...`
                  : selectedWorkouts[currentWorkoutIndex].description}
              </p>
            </div>
          </>
        ) : (
          "No workouts selected yet"
        )}
      </div>
    </CurrentWorkoutContainer>
  );
};

const CurrentWorkoutContainer = styled.div`
  & > h3 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    border-radius: 1rem;

    ${({ theme }) => css`
      background: ${theme.SURFACE.main};

      box-shadow: ${theme.BOX_SHADOW} 0px 1px 2px 0px,
        ${theme.BOX_SHADOW} 0px 2px 6px 2px;
      -webkit-box-shadow: ${theme.BOX_SHADOW} 0px 1px 2px 0px,
        ${theme.BOX_SHADOW} 0px 2px 6px 2px;
      -moz-box-shadow: ${theme.BOX_SHADOW} 0px 1px 2px 0px,
        ${theme.BOX_SHADOW} 0px 2px 6px 2px;
    `}

    padding: 1rem;

    @media (max-width: 900px) {
      max-width: auto;
      margin: 0 1rem;
    }
  }

  .card-text > h4 {
    margin-bottom: 0.5rem;
  }
`;
