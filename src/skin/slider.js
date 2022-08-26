import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Slider = ({ min, max, value, onInput }) => (
  <SliderContainer
    type="range"
    className="slider"
    min={min}
    max={max}
    value={value}
    onInput={onInput}
  />
);

const SliderContainer = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 0.5rem;
  border-radius: 5px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
  ${({ theme }) => css`
    background: ${theme.INPUT_SURFACE.default};

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: ${theme.INPUT_SURFACE.on_default};
      cursor: pointer;
    }

    &::-moz-range-thumb {
      width: 1.3rem;
      height: 1.3rem;
      border-radius: 50%;
      background: ${theme.INPUT_SURFACE.on_default};
      cursor: pointer;
    }
  `}
`;

export default Slider;
