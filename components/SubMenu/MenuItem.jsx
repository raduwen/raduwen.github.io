import Link from 'next/link'
import { useState } from 'react'

import { sub_menu_li, sub_menu_li_hover, sub_menu_link } from './SubMenu.module.css'

const MenuItem = ({ text, href, disabled }) => {
  const [isHover, setIsHover] = useState(false);
  const color = isHover ? 'white' : 'rgb(255, 162, 162)'

  const li_classes = [sub_menu_li]
  if (isHover) {
    li_classes.push(sub_menu_li_hover)
  }

  return (
    <li className={ li_classes.join(' ') } onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>
      <Link href={href}>
        <a className={ sub_menu_link }>
          {disabled
            ? <strike>❤️ {text}</strike>
            : <span>❤️ {text}</span>
          }
        </a>
      </Link>
    </li>
  )
}

export default MenuItem
