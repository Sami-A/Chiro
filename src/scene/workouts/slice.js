import { createSlice } from "@reduxjs/toolkit";
import { getSelectedWorkout } from "../../config/data";

const initialState = {
  selectedWorkouts: [],
};

const slice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    setWorkouts: (state, { payload }) => {
      return { ...state, selectedWorkouts: payload ? payload : [] };
    },
  },
});

export const { setWorkouts } = slice.actions;

export const getWorkouts = (bodyArea) => (dispatch) => {
  const response = getSelectedWorkout(bodyArea);
  dispatch(setWorkouts(response));
};

export default slice.reducer;
