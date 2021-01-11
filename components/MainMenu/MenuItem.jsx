import { useState } from 'react'

import { main_menu_li, main_menu_text, main_menu_img }from './MainMenu.module.css'

const colors = {
  a: {
    dark: "rgb(146, 86, 70)",
    normal:  "rgb(175, 115, 116)",
    light: "rgb(203, 140, 142)",
  },
  b: {
    dark: "rgb(95, 82, 55)",
    normal: "rgb(177, 152, 116)",
    light: "rgb(202, 184, 159)",
  },
  c: {
    dark: "rgb(87, 93, 65)",
    normal: "rgb(132, 141, 98)",
    light: "rgb(167, 174, 142)",
  },
  d: {
    dark: "rgb(73, 104, 80)",
    normal: "rgb(101, 159, 119)",
    light: "rgb(158, 196, 169)",
  },
  e: {
    dark: "rgb(61, 78, 75)",
    normal: "rgb(102, 151, 139)",
    light: "rgb(152, 185, 178)",
  },
  f: {
    dark: "rgb(77, 90, 96)",
    normal: "rgb(107, 133, 153)",
    light: "rgb(175, 190, 201)",
  },
  g: {
    dark: "rgb(70, 68, 95)",
    normal: "rgb(113, 98, 160)",
    light: "rgb(175, 169, 202)",
  },
  h: {
    dark: "rgb(88, 71, 101)",
    normal: "rgb(133, 99, 151)",
    light: "rgb(186, 165, 196)",
  },
  i: {
    dark: "rgb(108, 63, 95)",
    normal: "rgb(184, 107, 156)",
    light: "rgb(218, 178, 203)",
  },
}

const MenuItem = ({ text, color, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const liStyle = { backgroundColor: colors[color].dark }
  const c = isHover ? colors[color].light : colors[color].normal

  return (
    <li className={main_menu_li} style={liStyle} onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }} onClick={onClick}>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '10px', textDecoration: 'none' }}>
        <div className={main_menu_text} style={{ color: c }}>{text}</div>
        <div className={main_menu_img} style={{ backgroundColor: c }}></div>
      </div>
    </li>
  )
}

export default MenuItem
