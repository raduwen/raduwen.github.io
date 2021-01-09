import styles from '@/styles/layout.module.css'

import Logo from '@/components/Logo'
import Copyright from '@/components/Copyright'

import MainMenu from '@/components/MainMenu'
import SubMenu from '@/components/SubMenu'

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
        <Logo />
        <p>
          まだ何もないんじゃ
        </p>
      </main>

      <footer className={styles.footer}>
        <Copyright />
      </footer>
    </div>
  )
}

export default HomePage
