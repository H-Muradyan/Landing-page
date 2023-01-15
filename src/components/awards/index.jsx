import React from 'react'
import awards from "./images/awards.png"
import styles from "./Awards.module.css"

const Awards = () => {
  return (
    <div className={styles.container}>
      <img width="100%" src={awards} alt="awards" />
    </div>
  )
}

export default Awards