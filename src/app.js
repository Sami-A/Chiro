import { BrowserRouter } from "react-router-dom";

import { MainContainer } from "./layout/main-container";

export default function App() {
  return (
    <BrowserRouter>
      <MainContainer />
    </BrowserRouter>
  );
}
