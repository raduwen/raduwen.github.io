import { useState } from 'react'

import Logo from '@/components/Logo'
import Copyright from '@/components/Copyright'
import MainMenu from '@/components/MainMenu'
import {
  TopSubMenu,
  YobiSubMenu,
  ProfileSubMenu,
  ChatSubMenu,
  BbsSubMenu,
  IllustSubMenu,
  GameSubMenu,
  CGISubMenu,
  LinkSubMenu,
} from '@/components/SubMenu'
import Box, { BoxBody, BoxBar } from '@/components/Box'

import styles from '@/styles/layout.module.css'

const HomePage = () => {
  const [currentSubMenu, setCurrentSubMenu] = useState('top');

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <MainMenu
          onTop={() => { setCurrentSubMenu('top') }}
          onYobi={() => { setCurrentSubMenu('yobi') }}
          onProfile={() => { setCurrentSubMenu('profile') }}
          onChat={() => { setCurrentSubMenu('chat') }}
          onBbs={() => { setCurrentSubMenu('bbs') }}
          onIllust={() => { setCurrentSubMenu('illust') }}
          onGame={() => { setCurrentSubMenu('game') }}
          onCGI={() => { setCurrentSubMenu('cgi') }}
          onLink={() => { setCurrentSubMenu('link') }}
        />
      </header>

      <aside className={styles.aside}>
        {currentSubMenu == 'top' ? <TopSubMenu /> :
         currentSubMenu == 'yobi' ? <YobiSubMenu /> :
         currentSubMenu == 'profile' ? <ProfileSubMenu /> :
         currentSubMenu == 'chat' ? <ChatSubMenu /> :
         currentSubMenu == 'bbs' ? <BbsSubMenu /> :
         currentSubMenu == 'illust' ? <IllustSubMenu /> :
         currentSubMenu == 'game' ? <GameSubMenu /> :
         currentSubMenu == 'cgi' ? <CGISubMenu /> :
         currentSubMenu == 'link' ? <LinkSubMenu /> :
         null}
      </aside>

      <main className={styles.main}>
        <Box>
          <BoxBar>ほげ</BoxBar>
          <BoxBody>
            <section>
              <Logo />
              <p>
                まだ何もないんじゃ。<br />
                SPAにしてもええかもと思っとる。
              </p>
            </section>

            <section>
              <h2>NEWS</h2>
              <dl>
                <dt>2021/01/11</dt>
                <dd>メニューとホームに配置してるコンポーネントを追加!</dd>
              </dl>
            </section>
          </BoxBody>
          <BoxBar>ふが</BoxBar>
        </Box>
      </main>

      <footer className={styles.footer}>
        <Copyright />
      </footer>
    </div>
  )
}

export default HomePage
