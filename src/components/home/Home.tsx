import React from "react";
import styles from "./home.module.scss";
import { Content } from "../content/Content";
import photo from "../../assets/images/large_photo.png"
import smallPhoto from "../../assets/images/small_photo.png"


export const Home: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Content id={id}>
      <div className={styles.info}>
        <div className={styles.info__name}>
          <span>Denis</span>
          <span>Novik</span>
        </div>
        <div className={styles.info__more}>
          <span>UX | UI designer</span>
          <span>24 years old, Minsk</span>
        </div>
        <div className={styles["info__toogle-lang"]}>
          <span>RU</span>&nbsp;/&nbsp;<span>ENG </span>
        </div>
      </div>
      <div className={styles.photo}>
        <img src={photo} alt="Фото" className={styles.photo__large} />
        <img src={smallPhoto} alt="Фото" className={styles.photo__small} />

      </div>
    </Content>

  )
}