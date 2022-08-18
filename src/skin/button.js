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
    background-color: ${theme.PRIMARY.main};
    border: 2px solid ${theme.SECONDARY.main};
    border-radius: 50%;
    box-shadow: ${theme.SECONDARY.main} 4px 4px 0 0;
    color: ${theme.TEXT_COLOR};
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.9rem;
    height: 2.9rem;

    &:hover {
      background-color: ${theme.SECONDARY.main};
      color: ${theme.PRIMARY.main};
    }

    &:active {
      box-shadow: ${theme.SECONDARY.main} 2px 2px 0 0;
      transform: translate(2px, 2px);
    }
  `}
`;

export default Button;
