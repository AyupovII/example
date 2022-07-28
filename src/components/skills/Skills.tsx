import { Content } from "../content/Content";
import styles from "./skills.module.scss";
import psPng from "../../assets/svg/PS.png";
import prPng from "../../assets/svg/PR.png";
import aiPng from "../../assets/svg/AI.png";
import lrPng from "../../assets/svg/LR.png";
import figmaPng from "../../assets/svg/Figma.png";



import { Program } from "../program/Program";

export const Skills: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Content id={id}>
      <div className={styles.title}>Skills</div>
      <div className={styles.info}>I work in such programs as</div>
      <div className={styles["skills-list"]}>
        <Program image={psPng} name="Adobe Photoshop" num={5} />
        <Program image={prPng} name="Adobe Photoshop" num={4} />
        <Program image={aiPng} name="Adobe Photoshop" num={4} />
        <Program image={lrPng} name="Adobe Photoshop" num={3} />
        <Program image={figmaPng} name="Adobe Photoshop" num={4} />
      </div>

    </Content>
  )
}