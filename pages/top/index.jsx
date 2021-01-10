import styles from '@/styles/layout.module.css'

import Logo from '@/components/Logo'
import Copyright from '@/components/Copyright'
import MainMenu from '@/components/MainMenu'
import SubMenu from '@/components/SubMenu'

import Box, { BoxBody, BoxBar } from '@/components/Box'

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <MainMenu />
      </header>

      <aside className={styles.aside}>
        <SubMenu />
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
