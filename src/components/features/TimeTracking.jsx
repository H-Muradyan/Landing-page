import React from "react";
import { timeList } from "./const";
import tick from "./images/tick.svg";
import example from "./images/example.png";
import styles from "./Features.module.css";
import Button from "../shared/button";

const TimeTracking = () => {
  return (
    <div className={styles.timeContainer}>
      <div className={styles.timeText}>
        <h2>Track the time your employees spend on work and get detailed information</h2>
        <ul>
          {timeList.map((elem) => (
            <div key={elem.id} className={styles.list}>
              <img src={tick} alt="tick" />
              <li>{elem.text}</li>
            </div>
          ))}
        </ul>
        <Button text="RESERVE YOUR SEAT" route="#" />
      </div>
      <img className={styles.timeImg} src={example} alt="table" />
    </div>
  );
};

export default TimeTracking;
