import { useState } from 'react';
import classes from "../css/CoinFlip.module.css";

function CoinFlipPage() {
  const [number, setNumber] = useState(null);
  
  
  function flipCoin() {
    const randomNum = Math.round(Math.random());
    setNumber(randomNum);
  }

  return (
    <div>
      <div>Coin Flip page</div>
      <div>
        <button className={classes.flipBtn} onClick={flipCoin}>FLIP</button>
      </div>
      <div>{<p>Your random number is: {number}</p>}</div>
    </div>
  );
}
export default CoinFlipPage;
