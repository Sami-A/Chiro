import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.9rem;
  height: 2.9rem;
  border-radius: 50%;

  ${({ theme }) => css`
    border: 1px solid ${theme.BORDER_COLOR};
    background-color: inherit;
    color: ${theme.PRIMARY.on};
    
    &:hover {
      box-shadow: ${theme.BOX_SHADOW} 0px 1px 3px,
      ${theme.BOX_SHADOW} 0px 1px 2px;
      
      background-color: ${theme.SECONDARY.main};
      color: ${theme.PRIMARY.main};
    }
  `};
`;

export const ElevatedButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.BACKGROUND};
    border: 2px solid ${theme.SECONDARY.variant};
    border-radius: .5rem;
    box-shadow: ${theme.SECONDARY.main} 4px 4px 0 0;
    color: ${theme.SECONDARY.main};
    cursor: pointer;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 3rem;

    &:hover {
      background-color: ${theme.SURFACE.main};
      color: ${theme.ON_BACKGROUND};
      box-shadow: ${theme.ON_BACKGROUND} 2px 2px 0 0;
      transform: translate(2px, 2px);
      transition: 0.3s;
    }

    &:active {
      box-shadow: ${theme.ON_BACKGROUND} 2px 2px 0 0;
      transform: translate(2px, 2px);
    }
  `}
`;

export default Button;
