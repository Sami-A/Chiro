import { Navigation } from "./navigation";
import useRouter from "../helpers/useRouter";

export const MainContainer = () => {
  return (
    <div className="chiro-container">
      <Navigation />
      <div className="main-container">{useRouter()}</div>
    </div>
  );
};
