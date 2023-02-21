import { useState } from "react";

import CoinFlip from "./CoinFlip";
import Home from "./Home";

function MenuBar(props) {
  const [homeIsOpen, setHomeIsOpen] = useState(false);
  const [coinFlipIsOpen, setCoinFlipIsOpen] = useState(false);
  
  function openHome() {
    setCoinFlipIsOpen(false);
    setHomeIsOpen(true);
  }
  function openCoinFlip() {
    setCoinFlipIsOpen(true);
    setHomeIsOpen(false);
  }

  return (
    <div className="header">
      <h1 className="title">LILI & KELV :D</h1>
      <div className="mainDiv">
        <div className="menuBar">
          <button className="btn" onClick={openHome}>Home</button>
          <button className="btn" onClick={openCoinFlip}>Coin Flip</button>
          <button className="btn">PlaceHolder</button>
          <button className="btn">PlaceHolder</button>
        </div>
          {homeIsOpen && <Home />}
          {coinFlipIsOpen && <CoinFlip />}
      </div>
    </div>
  );
}
export default MenuBar;
