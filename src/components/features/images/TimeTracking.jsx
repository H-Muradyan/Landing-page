import React from "react";
import { timeList } from "./const";

const TimeTracking = () => {
  return (
    <div>
      <div>
        <h2>Track the time your employees spend on work and get detailed information</h2>
        <ul>
          {timeList.userBenefits.map((elem) => (
            <div key={elem.id} className={styles.list}>
              <img src={tick} alt="tick" />
              <li>{elem}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimeTracking;
