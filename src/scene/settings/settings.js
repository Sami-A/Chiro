import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import {
  WORKOUT_DURATION_MIN_MAX,
  BREAK_DURATION_MIN_MAX,
  AUTO_START,
  saveWorkoutDuration,
  saveBreakDuration,
  saveAutostart,
  changeTheme,
} from "./slice.js";

import { LOCAL_STORAGE, setItem } from "../../helpers/persist.js";

import Slider from "../../skin/slider.js";
import Switch from "../../skin/switch.js";
import { THEME_MODE } from "../../config/theme.js";

export const Settings = () => {
  const { workoutDuration, breakDuration, autostart, theme } = useSelector(
    ({ settings }) => settings
  );

  const dispatch = useDispatch();

  return (
    <SettingsContainer>
      <h1>Settings</h1>
      <div className="settings-card">
        <div className="settings-card-row">
          <span>
            Workout Duration(
            {`${WORKOUT_DURATION_MIN_MAX.min}-${WORKOUT_DURATION_MIN_MAX.max}`})
          </span>
          <div className="settings-card-row-content">
            <Slider
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
          <div className="settings-card-row-content">
            <Slider
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
        </div>
        <div className="settings-card-row">
          <span style={{ marginRight: ".7rem" }}>Autostart</span>
          <Switch
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
        </div>
        <div className="settings-card-row">
          <span style={{ marginRight: ".7rem" }}>Dark Theme</span>
          <Switch
            checked={theme === THEME_MODE.DARK}
            onChange={() => {
              const newTheme =
                theme === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT;

              setItem(LOCAL_STORAGE.settings, {
                workoutDuration,
                breakDuration,
                autostart,
                theme: newTheme,
              });
              dispatch(changeTheme(newTheme));
            }}
          />
        </div>
      </div>
    </SettingsContainer>
  );
};

const SettingsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 4rem;
  }

  .settings-card {
    width: 20%;
    margin-top: 1rem;
    padding: 2rem 1rem;
    border-radius: 3px;
    width: 25rem;
    border-radius: 0.7rem;

    ${({ theme }) => css`
      background: ${theme.SURFACE.main};
      color: ${theme.SURFACE.on};
      box-shadow: ${theme.BOX_SHADOW} 0px 1px 2px 0px,
        ${theme.BOX_SHADOW} 0px 2px 6px 2px;
      -webkit-box-shadow: ${theme.BOX_SHADOW} 0px 1px 2px 0px,
        ${theme.BOX_SHADOW} 0px 2px 6px 2px;
      -moz-box-shadow: ${theme.BOX_SHADOW} 0px 1px 2px 0px,
        ${theme.BOX_SHADOW} 0px 2px 6px 2px;
    `}

    @media (max-width: 600px) {
      width: calc(100% - 3rem);
      margin: 0 3rem;
    }
  }

  .settings-card-row {
    margin-bottom: 2.5rem;
  }
  .settings-card-row-content {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-top: 1.2rem;
  }
  .settings-card-row-content > span {
    font-size: 1.2em;
    font-weight: bold;
  }
`;
