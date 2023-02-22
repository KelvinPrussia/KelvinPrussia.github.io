import { Link } from "react-router-dom";

import classes from "./MenuBar.module.css";

function MenuBar(props) {
 

  return (
    <div>
    <header className={classes.header}><div className={classes.title}>LILI & KELV :D</div></header>
      <nav className={classes.menuButtons}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coinflip">Coin Flip</Link>
          </li>
          <li>
            <Link to="">PLACEHOLDER</Link></li>
        </ul>
      </nav>
      </div>
  );
}
export default MenuBar;
