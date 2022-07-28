import classNames from "classnames";
import React from "react";
import { Content } from "../content/Content";
import styles from "./portfolio.module.scss";
import fashionStore from "../../assets/images/fashionStore.png";
import reebok from "../../assets/images/reebok.png";
import braun from "../../assets/images/braun.png";


export const Portfolio: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Content id={id} classnames={styles.content}>
      <div className={styles.portfolio}>
        <div className={styles.portfolio__title}>
          Portfolio
        </div>
        <div className={classNames(styles.portfolio__sites, styles.sites)}>
          <div className={classNames(styles.sites, styles.site)}>
            <div className={styles.site__image}>
              <img src={fashionStore} alt="FashionStore" />
            </div>
            <div className={styles.site__link}>
              Online fashion store - Homepage
            </div>
          </div>

          <div className={classNames(styles.sites, styles.site)}>
            <div className={styles.site__image}>
              <img src={reebok} alt="Reebok" />
            </div>
            <div className={styles.site__link}>
              Reebok Store - Concept
            </div>
          </div>

          <div className={classNames(styles.sites, styles.site)}>
            <div className={styles.site__image}>
              <img src={braun} alt="Braun" />
            </div>
            <div className={styles.site__link}>
              Braun Landing Page - Concept
            </div>
          </div>
        </div>
      </div>
    </Content>
  )
}