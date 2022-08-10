import { useDispatch } from "react-redux";

import { resetTimer } from "../slice";

import reload from "../../../assets/reload.svg";

export const ResetButton = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(resetTimer())}>
      <img src={reload} alt="reload" />
    </button>
  );
};
