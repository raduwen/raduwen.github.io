import { FC } from 'react'
import styles from './SubMenu.module.css'

const Topic: FC = ({ children }) => {
  return (
    <div className={styles.sub_menu_topic}>{children}</div>
  )
}

export default Topic
