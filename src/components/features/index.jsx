import React from "react";
import styles from "./Features.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { menu } from "./const";
import time from "./images/time.svg";

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Save Big on All Features</h2>
        <i>no exceptions</i>
      </div>

      <div className={styles.sidebar}>
        <Tabs
          defaultActiveKey="Time Tracking with Screenshots"
          id="uncontrolled-tab-example"
          className={styles.nav}
        >
          {menu.map((elem) => (
            <Tab
              key={elem.id}
              eventKey={elem.name}
              title={
                <div className={styles.navItem}>
                  <img width="30px" src={elem.icon} />
                  <p>{elem.name}</p>
                </div>
              }
            >
              {elem.component}
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Features;
