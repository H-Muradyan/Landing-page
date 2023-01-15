import React from "react";
import { Link } from "react-router-dom";
import styles from "./Companies.module.css";
import { companies } from "./const";

const Companies = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trusted by 1000+ Companies</h2>
      <div className={styles.companies}>
        {companies.map((company) => (
          <Link key={company.id} to="#">
            <img src={company.src} alt="company logo" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Companies;
