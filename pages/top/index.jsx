import styles from '@/styles/layout.module.css'

import Logo from '@/components/Logo'
import Copyright from '@/components/Copyright'

const TopPage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <nav>
          メインメニュー: 工事中
        </nav>
      </header>

      <aside className={styles.aside}>
        <nav>
          サブメニュー: 工事中
        </nav>
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

export default TopPage
