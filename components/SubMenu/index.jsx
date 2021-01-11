import Link from 'next/link'
import { useState } from 'react'

import MenuItem from './MenuItem'
import Topic from './Topic'
import styles from './SubMenu.module.css'

const SubMenu = () => {
  return (
    <nav>
      <section>
        <Topic>まずはここを<br/>チェックじゃ〜</Topic>
        <ul className={ styles.sub_menu_ul }>
          <MenuItem href="/top" text="トップページ" />
          <MenuItem href="#" text="はじめに" disabled={true} />
          <MenuItem href="#" text="質問&サポート" disabled />
        </ul>
      </section>
    </nav>
  )
}

export default SubMenu
