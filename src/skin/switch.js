import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Switch = ({ checked, onChange }) => (
  <SwitchContainer>
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span className="switch-slider round"></span>
  </SwitchContainer>
);

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 2.68rem;
  height: 1.54rem;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  ${({ theme }) => css`
    .switch-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: red;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .switch-slider:before {
      position: absolute;
      content: "";
      height: 19px;
      width: 19px;
      left: 0.08rem;
      top: 0.2rem;
      bottom: -1rem;

      background-color: ${theme.INPUT_SURFACE.on_default};
      -webkit-transition: 0.4s;
      transition: 0.4s;
      z-index: 1;
    }

    input:checked + .switch-slider {
      background-color: ${theme.INPUT_SURFACE.active};
    }

    input:focus + .switch-slider {
      box-shadow: 0 0 1px ${theme.INPUT_SURFACE.BOX_SHADOW};
    }

    input:checked + .switch-slider:before {
      -webkit-transform: translateX(20px);
      -ms-transform: translateX(20px);
      transform: translateX(20px);
    }

    .switch-slider.round {
      border-radius: 34px;
      background-color: ${theme.INPUT_SURFACE.default};
    }

    .switch-slider.round:before {
      border-radius: 50%;
    }
  `}
`;

export default Switch;
