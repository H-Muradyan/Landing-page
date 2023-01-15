import React from "react";
import Button from "../shared/button";
import styles from "./Footer.module.css";
import ellipse from "./images/ellipse.png"

const Footer = () => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h3>Save 50% Now</h3>
          <Button text="GET MY DISCOUNT" route="#"/>
        </div>
        <img width="70%" src={ellipse} alt="" />
      </div>
    </div>
  );
};

export default Footer;
