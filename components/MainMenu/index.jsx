import styles from './MainMenu.module.css'
import BrandLogo from './BrandLogo'
import MenuItem from './MenuItem'

const MainMenu = ({ onTop, onYobi, onProfile, onChat, onBbs, onIllust, onGame, onCGI, onLink }) => {
  return (
    <nav>
      <section style={{ display: 'flex' }}>
        <BrandLogo />
        <ul className={styles.main_menu_ul}>
          <MenuItem text="トップ" color="a" onClick={onTop}/>
          <MenuItem text="???" color="b" onClick={onYobi}/>
          <MenuItem text="プロフ" color="c" onClick={onProfile}/>
          <MenuItem text="Chat" color="d" onClick={onChat}/>
          <MenuItem text="BBS" color="e" onClick={onBbs}/>
          <MenuItem text="イラス" color="f" onClick={onIllust}/>
          <MenuItem text="ゲーム" color="g" onClick={onGame}/>
          <MenuItem text="CGI" color="h" onClick={onCGI}/>
          <MenuItem text="リンク" color="i" onClick={onLink}/>
        </ul>
      </section>
    </nav>
  )
}

export default MainMenu
