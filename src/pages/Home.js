import { Link } from "react-router-dom";

import classes from "../css/Home.module.css";
import coinImage from "../img/coin.png";

function HomePage(props) {
  return (
      <div className={classes.menuGrid}>
          <div className={classes.menuItem}>
            <Link to="/coinflip"><img src={coinImage} alt="Coinflip Link"/></Link>
            <text>Coin Flip</text>
          </div>
          <div className={classes.menuItem}>
            <Link to="/quests"></Link>
            <text>Quests</text>
          </div>
          <div className={classes.menuItem}>
            <Link to="/"></Link>
            <text>Placeholder</text>
          </div>
          <div className={classes.menuItem}>
            <Link to="/"></Link>
            <text>Placeholder</text>
          </div>
      </div>
  );
}
export default HomePage;
