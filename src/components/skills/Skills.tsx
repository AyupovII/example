import { Content } from "../content/Content";
import styles from "./skills.module.scss";
import psPng from "../../assets/svg/PS.png";
import { Program } from "../program/Program";

export const Skills: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Content id={id}>
      <div className={styles.title}>Skills</div>
      <div className={styles.info}>I work in such programs as</div>
      <Program image={psPng} name="Adobe Photoshop" num={3} />
    </Content>
  )
}