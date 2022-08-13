import { BrowserRouter } from "react-router-dom";

import { Navigation } from "./layout/navigation";
import { MainContainer } from "./layout/main-container";

export default function App() {
  return (
    <BrowserRouter>
      <div className="chiro-container">
        <Navigation />
        <MainContainer />
      </div>
    </BrowserRouter>
  );
}
