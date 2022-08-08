import { configureStore } from "@reduxjs/toolkit";
import WorkoutsSlice from "./scene/workouts/slice";

export const store = configureStore({
  reducer: { workouts: WorkoutsSlice },
});
