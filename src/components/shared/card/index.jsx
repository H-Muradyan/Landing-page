import React from "react";
import styles from "./Card.module.css";

import Button from "../button";
import tick from "./images/tick.svg";

const Card = ({ benefit }) => {
  return (
    <div className={styles.container}>
      <img className={styles.circle} src={benefit.percent} alt={benefit.percent} />
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{benefit.duration}</h3>
        <div className={styles.box}>
          <div className={styles.previousPrice}>{benefit.previousPrice}</div>
          <div className={styles.line}></div>
        </div>
        <p className={styles.price}>{benefit.price}</p>
        <p className={styles.time}>{benefit.time}</p>
        <ul>
          {benefit.userBenefits.map((userBenefit, index) => (
            <div key={index} className={styles.benefit}>
              <img src={tick} alt="tick" />
              <li>{userBenefit}</li>
            </div>
          ))}
        </ul>
        <Button text="GET YOUR DEAL" route="#" />
      </div>
    </div>
  );
};

export default Card;
