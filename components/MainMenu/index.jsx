import styles from './MainMenu.module.css'
import BrandLogo from './BrandLogo'
import MenuItem from './MenuItem'

const MainMenu = () => {
  return (
    <nav>
      <section style={{ display: 'flex' }}>
        <BrandLogo />
        <ul className={styles.main_menu_ul}>
          <MenuItem text="トップ" color="a" onClick={() => console.log("TODO")}/>
          <MenuItem text="???" color="b" onClick={() => console.log("TODO")}/>
          <MenuItem text="???" color="c" onClick={() => console.log("TODO")}/>
          <MenuItem text="???" color="d" onClick={() => console.log("TODO")}/>
          <MenuItem text="???" color="e" onClick={() => console.log("TODO")}/>
          <MenuItem text="???" color="f" onClick={() => console.log("TODO")}/>
          <MenuItem text="???" color="g" onClick={() => console.log("TODO")}/>
          <MenuItem text="???" color="h" onClick={() => console.log("TODO")}/>
          <MenuItem text="???" color="i" onClick={() => console.log("TODO")}/>
        </ul>
      </section>
    </nav>
  )
}

export default MainMenu
