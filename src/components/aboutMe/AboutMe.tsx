import React from "react";
import { Content } from "../content/Content";
import styles from "./aboutMe.module.scss";

export const AboutMe: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Content id={id} classnames={styles.content}>
      <div className={styles.about}>
        <div className={styles.about__title}>
          About me
        </div>
        <div className={styles.about__info}>
          <div>
            <span>Hi, I'm Denis – UX/UI designer from Minsk. </span>
            <span>I'm interested in design and everything connected with it.</span>
          </div>
          <div>
            <span>I'm studying at courses "Web and mobile design interfaces" in IT-Academy.</span>
          </div>
          <div>
            <span>Ready to implement excellent projects with wonderful people.</span>
          </div>
        </div>
      </div>


    </Content>
  )
}