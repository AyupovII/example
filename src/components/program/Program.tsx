import React, { useEffect, useRef } from "react";
import styles from "./program.module.scss";

export const Program: React.FC<{ image: any; name: string, num: number }> = ({ image, name, num = 0 }) => {
  const fiveStar =
    Array(5).fill(null).map((el, index) => {
      if (num >= index + 1) {
        return <div key={index} className={styles.star + " " + styles["star-active"]} />
      }
      else
        return <div key={index} className={styles.star} />
    })
  console.log(fiveStar);
  return (
    <div className={styles.program}>
      <div className={styles.program__item}>
        <img className={styles.program__icon} src={image} alt={name} />
        <div className={styles.program__name}>{name}</div>
      </div>

      <div className={styles.program__stars}>
        {
          fiveStar.map(el => el)
        }
      </div>
    </div>
  )
}