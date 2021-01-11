import Link from 'next/link'
import { useState } from 'react'

const borderStyle = '1px solid black'

const styles = {
  title: {
    margin: 0,
    padding: 0,
    fontSize: '10px',
    color: '#ffd5aa',
    backgroundColor: 'rgb(86, 44, 44)',
    border: borderStyle,
  },
  ul: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    borderRight: borderStyle,
    borderLeft: borderStyle,
    backgroundColor: '#b55b5b',
  },
  li: {
    fontSize: '10px',
    borderBottom: borderStyle,
  },
  a: {
    textDecoration: 'none',
  },
}

const MenuItem = ({ text, href, disabled }) => {
  const [isHover, setIsHover] = useState(false);
  const color = isHover ? 'white' : 'rgb(255, 162, 162)'

  return (
    <li style={ styles.li } onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>
      <Link href={href}>
        <a style={{ ...styles.a, color }}>
          {disabled
            ? <strike>❤️ {text}</strike>
            : <span>❤️ {text}</span>
          }
        </a>
      </Link>
    </li>
  )
}

const SubMenu = () => {
  return (
    <nav style={{ backgroundColor: 'rgb(255, 128, 128)'/* '#e89797' */, paddingBottom: '64px' }}>
      <section>
        <h2 style={ styles.title }>まずはここを<br/>チェックじゃ〜</h2>
        <ul style={ styles.ul }>
          <MenuItem href="/top" text="トップページ" />
          <MenuItem href="#" text="はじめに" disabled={true} />
          <MenuItem href="#" text="質問&サポート" disabled />
        </ul>
      </section>
    </nav>
  )
}

export default SubMenu
