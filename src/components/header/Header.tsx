import { Content } from "../content/Content"
import styles from "./header.module.scss"

export const Header: React.FC = () => {
  return (
    <Content classnames={styles.header}>
      <div className={styles.header__content}>
        <div><a href="#">Home</a></div>
        <div><a href="#aboutMe">About me</a></div>
        <div><a href="#skills">Skills</a></div>
        <div><a href="#portfolio">Portfolio</a></div>
        <div><a href="#contacts">Contacts</a></div>
      </div>
    </Content>

  )
}