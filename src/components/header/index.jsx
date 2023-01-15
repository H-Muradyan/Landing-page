import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Link to="#">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <Link className={styles.navButton} to="#">
          GET NOW
        </Link>
      </nav>
    </header>
  );
};

export default Header;
