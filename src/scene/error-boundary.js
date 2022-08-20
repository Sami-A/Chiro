import { Component } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";

import { ElevatedButton } from "../skin/button";

import { THEME_MODE } from "../config/theme";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasErrorOccurred: false };

    this.clearErrorSignal = this.clearErrorSignal.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasErrorOccurred: true };
  }

  componentDidCatch(error, errorMessage) {
    //console.table("Error Message:=>", error, errorMessage);
  }

  clearErrorSignal() {
    this.setState(
      (pre) => {
        return { ...pre, hasErrorOccurred: false };
      },
      () => console.log("sdfsdf", this.state.hasErrorOccurred)
    );
  }

  render() {
    if (this.state.hasErrorOccurred) {
      return <ErrorBoundaryContent clearErrorSignal={this.clearErrorSignal} />;
    }

    return this.props.children;
  }
}

const ERROR_GIF = {
  light: "error_light.gif",
  dark: "error_dark.gif",
};

const ErrorBoundaryContent = ({ clearErrorSignal }) => {
  const theme = useSelector(({ settings }) => settings.theme);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    clearErrorSignal();
  };

  return (
    <ErrorMessageContainer>
      <div className="gif-container">
        <img
          src={require(`../assets/${
            theme === THEME_MODE.LIGHT ? ERROR_GIF.light : ERROR_GIF.dark
          }`)}
          alt="404"
        />
        <h1>WTF!?</h1>
        <div>
          <h1>Unexpected error has occurred!</h1>
          <ElevatedButton onClick={goHome}>Go Home</ElevatedButton>
        </div>
      </div>
    </ErrorMessageContainer>
  );
};

const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  font-size: 1rem;

  .gif-container {
    position: relative;

    & > img {
      /* min-width: 300px; */

      @media (max-width: 600px) {
        max-width: 300px;
      }
    }
    & > h1 {
      position: absolute;
      top: 35%;
      left: 50%;
      font-size: 3rem;
      font-family: ${({ theme }) => theme.FUN_FONT};

      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }
    & > div {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > h1 {
        margin-bottom: 1.5rem;
        font-size: 1.1rem;
        @media (max-width: 600px) {
          font-size: 1rem;
        }
      }
    }
  }
`;
