import React from "react";
import img50 from "./images/img50.png";
import styles from "./Hero.module.css";
import time from "./images/time.svg";
import star from "./images/star.svg";
import { apps } from "./const";
import Button from "../shared/button";
import line from "./images/line.svg";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          <span>CYBER MONDAY </span> means an even <span> BIGGER SALE</span>
        </h1>
        <p className={styles.description}>Cyber Monday saves you money, WebWork saves you time.</p>
        <Button text="SAVE BIG NOW" route="#" />
        <div className={styles.duration}>
          <img src={time} alt="time icon" />
          <span>
            14-day free trial <img src={line} /> No credit card required
          </span>
        </div>
        <div className={styles.rating}>
          <div className={styles.ratingStars}>
            <img src={star} alt="star icon" />
            <img src={star} alt="star icon" />
            <img src={star} alt="star icon" />
            <img src={star} alt="star icon" />
            <img src={star} alt="star icon" />
          </div>
          <span>Reviews from 51K+ happy users below and beyond</span>
        </div>
        <div className={styles.apps}>
          {apps.map((app) => (
            <img key={app.id} src={app.src} alt={app.title} />
          ))}
        </div>
      </div>
      <img className={styles.heroImg} width="40%" src={img50} alt="sale percent" />
    </div>
  );
};

export default Hero;
