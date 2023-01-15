import React from "react";
import Card from "../shared/card";
import styles from "./Benefits.module.css";
import { benefits } from "./const";

const Benefits = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Benefit both ways - monthly or yearly</h3>
      <div className={styles.cardsContainer}>
        {benefits.map((benefit) => (
          <div className={styles.benefit} key={benefit.id}>
            <Card benefit={benefit} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
