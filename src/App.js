import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import classes from "./css/Title.module.css";
import CoinFlipPage from "./pages/CoinFlip";
import HomePage from "./pages/Home";
import QuestsPage from "./pages/Quests";


function App() {
  return (
    <div>
          <header className={classes.header}><div className={classes.title}><Link to="/">TITLE FOR SITE</Link></div></header>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coinflip" element={<CoinFlipPage />} />
          <Route path="/quests" element={<QuestsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
