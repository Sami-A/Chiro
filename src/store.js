import { configureStore } from "@reduxjs/toolkit";

import WorkoutsSlice from "./scene/workouts/slice";
import SettingsSlice from "./scene/settings/slice";

const reducer = { workouts: WorkoutsSlice, settings: SettingsSlice };

export const store = configureStore({
  reducer,
});
