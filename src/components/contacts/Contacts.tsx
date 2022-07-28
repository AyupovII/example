import React from "react";
import { Content } from "../content/Content";
import styles from "./contacts.module.scss";
import inPng from "../../assets/svg/in.png";
import instPng from "../../assets/svg/inst.png";
import bePng from "../../assets/svg/be.png";
import surfacePng from "../../assets/svg/surface.png";

export const Contacts: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Content id={id}>
      <div className={styles.contacts}>
        <div className={styles.contacts__title}>
          Contacts
        </div>
        <div className={styles.contacts__text}>
          <span>Want to know more or just chat?</span>
          <span>You are welcome!</span>
        </div>
        <div className={styles.contacts__btn}>
          Send message
        </div>
        <div className={styles.contacts__social}>
          <img src={inPng} alt="in" />
          <img src={instPng} alt="inst" />
          <img src={bePng} alt="be" />
          <img src={surfacePng} alt="surface" />
        </div>
        <div className={styles.contacts__notification}>
          <span>Like me on</span>
          <span>LinkedIn, Instagram, Behance, Dribble</span>
        </div>
      </div>
    </Content>
  )
}