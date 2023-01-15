import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({text, route}) => {
  return (
    <Link className={styles.btn} to={route}>
      {text}
    </Link>
  );
};

export default Button;
