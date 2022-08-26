import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE, getItem } from "helpers/persist";
import { THEME_MODE } from "config/theme";

export const AUTO_START = {
  enabled: "ENABLED",
  disabled: "DISABLED",
};

export const WORKOUT_DURATION_MIN_MAX = {
  min: 10,
  max: 60,
  default: 10,
};

export const BREAK_DURATION_MIN_MAX = {
  min: 5,
  max: 10,
  default: 5,
};

const localData = getItem(LOCAL_STORAGE.settings) || {};

const initialState = {
  workoutDuration:
    localData.workoutDuration || WORKOUT_DURATION_MIN_MAX.default,
  breakDuration: localData.breakDuration || BREAK_DURATION_MIN_MAX.default,
  autostart: localData.autostart || AUTO_START.disabled,
  theme: localData.theme || THEME_MODE.LIGHT,
};

const slice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    saveWorkoutDuration: (state, { payload }) => {
      return { ...state, workoutDuration: payload };
    },
    saveBreakDuration: (state, { payload }) => {
      return { ...state, breakDuration: payload };
    },
    saveAutostart: (state, { payload }) => {
      const autostart =
        payload === AUTO_START.enabled
          ? AUTO_START.enabled
          : AUTO_START.disabled;

      return {
        ...state,
        autostart,
      };
    },
    changeTheme: (state, { payload }) => {
      return { ...state, theme: payload };
    },
  },
});

export const {
  saveWorkoutDuration,
  saveBreakDuration,
  saveAutostart,
  changeTheme,
} = slice.actions;

export default slice.reducer;
