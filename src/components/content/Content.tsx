
import React from "react";
import styles from "./content.module.scss";
import classNames from "classnames";

export const Content: React.FC<{ children: React.ReactNode, classnames?: string, id?: string }> = ({ children, classnames="", id="" }) => {
  return (
    <div id={id} className={classNames(styles.content,{[classnames]:!!classNames}) }>
      <div className={styles.content__info}>
        {children}
      </div>
      
    </div>
  )
}