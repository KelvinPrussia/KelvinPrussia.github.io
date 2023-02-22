import { Route, Routes } from "react-router-dom";

import CoinFlipPage from "./pages/CoinFlip";
import HomePage from "./pages/Home";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div>
      <div>
        <MenuBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coinflip" element={<CoinFlipPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
