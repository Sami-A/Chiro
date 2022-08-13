import { useSelector, useDispatch } from "react-redux";

import {
  WORKOUT_DURATION_MIN_MAX,
  BREAK_DURATION_MIN_MAX,
  AUTO_START,
  saveWorkoutDuration,
  saveBreakDuration,
  saveAutostart,
} from "./slice.js";

import { LOCAL_STORAGE, setItem } from "../../helpers/persist.js";

export const Settings = () => {
  const { workoutDuration, breakDuration, autostart } = useSelector(
    ({ settings }) => settings
  );

  const dispatch = useDispatch();

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="settings-card">
        <div className="settings-card-row">
          <span>
            Workout Duration(
            {`${WORKOUT_DURATION_MIN_MAX.min}-${WORKOUT_DURATION_MIN_MAX.max}`})
          </span>
          <div className="settings-card-row">
            <input
              type="range"
              className="slider"
              min={WORKOUT_DURATION_MIN_MAX.min}
              max={WORKOUT_DURATION_MIN_MAX.max}
              value={workoutDuration}
              onInput={(e) => {
                setItem(LOCAL_STORAGE.settings, {
                  workoutDuration: e.target.value,
                  breakDuration,
                  autostart,
                });
                dispatch(saveWorkoutDuration(e.target.value));
              }}
            />
            <span>{workoutDuration}</span>
          </div>
        </div>
        <div className="settings-card-row">
          <span>
            Break Duration(
            {`${BREAK_DURATION_MIN_MAX.min}-${BREAK_DURATION_MIN_MAX.max}`})
          </span>
          <div className="settings-card-row">
            <input
              type="range"
              className="slider"
              min={BREAK_DURATION_MIN_MAX.min}
              max={BREAK_DURATION_MIN_MAX.max}
              value={breakDuration}
              onInput={(e) => {
                setItem(LOCAL_STORAGE.settings, {
                  workoutDuration,
                  breakDuration: e.target.value,
                  autostart,
                });
                dispatch(saveBreakDuration(e.target.value));
              }}
            />
            <span>{breakDuration}</span>
          </div>
          <div className="settings-card-row">
            <span style={{ marginRight: ".7rem" }}>Autostart</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={autostart === AUTO_START.enabled}
                onChange={() => {
                  const newAutostart =
                    autostart === AUTO_START.enabled
                      ? AUTO_START.disabled
                      : AUTO_START.enabled;

                  setItem(LOCAL_STORAGE.settings, {
                    workoutDuration,
                    breakDuration,
                    autostart: newAutostart,
                  });
                  dispatch(saveAutostart(newAutostart));
                }}
              />
              <span className="switch-slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
