import { createSlice } from "@reduxjs/toolkit";
import { getSelectedWorkout } from "../../config/data";

export const ALL_STATUS = {
  idle: "IDLE",
  started: "STARTED",
  paused: "PAUSED",
};

export const TIMER_TYPE = {
  workout: "WORKOUT",
  break: "BREAK",
};

export const AUTO_START = {
  enabled: "ENABLED",
  disabled: "DISABLED",
};

const initialState = {
  workoutDuration: 10,
  breakDuration: 5,

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
      return { ...state, status: payload };
    },
    setWorkouts: (state, { payload }) => {
      clearInterval(state.interval);
      return {
        ...state,
        selectedWorkouts: payload ? payload : [],
        currentWorkoutIndex: 0,
        status: ALL_STATUS.idle,
        type: TIMER_TYPE.workout,
        timeLeft: 0,
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

      let currentWorkoutIndex, type, timeLeft;

      if (state.currentWorkoutIndex < state.selectedWorkouts.length - 1) {
        if (state.type === TIMER_TYPE.workout) {
          currentWorkoutIndex = state.currentWorkoutIndex; //wil change after the break ended
          type = TIMER_TYPE.break;
          timeLeft = state.breakDuration;
        } else {
          currentWorkoutIndex = state.currentWorkoutIndex + 1;
          type = TIMER_TYPE.workout;
          timeLeft = state.workoutDuration;
        }
      } else {
        currentWorkoutIndex = 0;
        type = TIMER_TYPE.workout;
        timeLeft = state.workoutDuration;
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
    resetTimer: (state) => {
      clearInterval(state.interval);

      const timeLeft =
        state.type === TIMER_TYPE.workout
          ? state.workoutDuration
          : state.breakDuration;

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
      return {
        ...state,
        status: ALL_STATUS.idle,
        type: TIMER_TYPE.workout, // transition break before moving to the selected workout
        timeLeft: state.workoutDuration,
        currentWorkoutIndex: payload, //after a transition break ended
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

export const getWorkouts = (bodyArea) => (dispatch) => {
  const response = getSelectedWorkout(bodyArea);
  dispatch(setWorkouts(response));
};

export default slice.reducer;
