import useRouter from "../helpers/useRouter";

export const MainContainer = () => {
  return <div className="main-container">{useRouter()}</div>;
};
