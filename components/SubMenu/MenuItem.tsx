import Link from 'next/link'
import { useState } from 'react'
import styles from './SubMenu.module.css'

type Props = {
  text: string
  href: string
  disabled?: boolean
}

const MenuItem = ({ text, href, disabled }: Props) => {
  const [isHover, setIsHover] = useState(false);
  const color = isHover ? 'white' : 'rgb(255, 162, 162)'

  const li_classes = [styles.sub_menu_li]
  if (isHover) {
    li_classes.push(styles.sub_menu_li_hover)
  }

  return (
    <li className={ li_classes.join(' ') } onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>
      <Link href={href}>
        <a className={styles.sub_menu_link}>
          {disabled
            ? <del>❤️ {text}</del>
            : <span>❤️ {text}</span>
          }
        </a>
      </Link>
    </li>
  )
}

export default MenuItem
