import { createSlice } from "@reduxjs/toolkit";
import { getSelectedWorkout } from "config/data";

export const ALL_STATUS = {
  idle: "IDLE",
  started: "STARTED",
  paused: "PAUSED",
};

export const TIMER_TYPE = {
  workout: "WORKOUT",
  break: "BREAK",
};

const initialState = {
  selectedWorkouts: [],
  currentWorkoutIndex: 0,
  status: ALL_STATUS.idle,
  type: TIMER_TYPE.workout,
  timeLeft: 0,
  progress: 100,
  interval: null,
};

const slice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    setStatus: (state, { payload }) => {
      clearInterval(state.interval);
      return { ...state, status: payload, interval: null };
    },
    setWorkouts: (state, { payload }) => {
      clearInterval(state.interval);
      const { data, workoutDuration } = payload;

      return {
        ...state,
        selectedWorkouts: data ? data : [],
        currentWorkoutIndex: 0,
        status: ALL_STATUS.idle,
        type: TIMER_TYPE.workout,
        timeLeft: workoutDuration,
        progress: 100,
        interval: null,
      };
    },
    setProgress: (state, { payload }) => {
      return {
        ...state,
        progress: payload,
      };
    },
    setTimeLeft: (state, { payload }) => {
      return {
        ...state,
        timeLeft: payload,
      };
    },
    saveInterval: (state, { payload }) => {
      return { ...state, interval: payload };
    },
    pauseTimer: (state) => {
      clearInterval(state.interval);
      return { ...state, status: ALL_STATUS.paused, interval: null };
    },
    setNextTimer: (state, { payload }) => {
      clearInterval(state.interval);

      const { workoutDuration, breakDuration } = payload;
      let currentWorkoutIndex, type, timeLeft;

      if (state.currentWorkoutIndex < state.selectedWorkouts.length - 1) {
        if (state.type === TIMER_TYPE.workout) {
          currentWorkoutIndex = state.currentWorkoutIndex; //wil change after the break ended
          type = TIMER_TYPE.break;
          timeLeft = breakDuration;
        } else {
          currentWorkoutIndex = state.currentWorkoutIndex + 1;
          type = TIMER_TYPE.workout;
          timeLeft = workoutDuration;
        }
      } else {
        currentWorkoutIndex = 0;
        type = TIMER_TYPE.workout;
        timeLeft = workoutDuration;
      }
      return {
        ...state,
        status: ALL_STATUS.idle,
        type,
        timeLeft,
        progress: 100,
        currentWorkoutIndex,
      };
    },
    resetTimer: (state, { payload }) => {
      clearInterval(state.interval);

      const { workoutDuration, breakDuration } = payload;
      const timeLeft =
        state.type === TIMER_TYPE.workout ? workoutDuration : breakDuration;

      return {
        ...state,
        status: ALL_STATUS.idle,
        timeLeft,
        progress: 100,
        interval: null,
      };
    },
    moveToSelectedWorkout: (state, { payload }) => {
      clearInterval(state.interval);

      const { workoutDuration, index } = payload;

      return {
        ...state,
        status: ALL_STATUS.idle,
        type: TIMER_TYPE.workout, // transition break before moving to the selected workout
        timeLeft: workoutDuration,
        currentWorkoutIndex: index, //after a transition break ended
        progress: 100,
        interval: null,
      };
    },
  },
});

export const {
  setStatus,
  setWorkouts,
  setProgress,
  setTimeLeft,
  saveInterval,
  pauseTimer,
  resetTimer,
  setNextTimer,
  moveToSelectedWorkout,
} = slice.actions;

export const getWorkouts = (bodyArea, workoutDuration) => (dispatch) => {
  const response = getSelectedWorkout(bodyArea);
  dispatch(setWorkouts({ data: response, workoutDuration }));
};

export default slice.reducer;
