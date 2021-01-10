import { useState } from 'react'

const colors= {
  a: {
    mainColor: "rgb(146, 86, 70)",
    subColor:  "rgb(175, 115, 116)",
    light: "rgb(203, 140, 142)",
  },
  b: {
    mainColor: "rgb(95, 82, 55)",
    subColor: "rgb(177, 152, 116)",
    light: "rgb(202, 184, 159)",
  },
  c: {
    mainColor: "rgb(87, 93, 65)",
    subColor: "rgb(132, 141, 98)",
    light: "rgb(167, 174, 142)",
  },
  d: {
    mainColor: "rgb(73, 104, 80)",
    subColor: "rgb(101, 159, 119)",
    light: "rgb(158, 196, 169)",
  },
  e: {
    mainColor: "rgb(61, 78, 75)",
    subColor: "rgb(102, 151, 139)",
    light: "rgb(152, 185, 178)",
  },
  f: {
    mainColor: "rgb(77, 90, 96)",
    subColor: "rgb(107, 133, 153)",
    light: "rgb(175, 190, 201)",
  },
  g: {
    mainColor: "rgb(70, 68, 95)",
    subColor: "rgb(113, 98, 160)",
    light: "rgb(175, 169, 202)",
  },
  h: {
    mainColor: "rgb(88, 71, 101)",
    subColor: "rgb(133, 99, 151)",
    light: "rgb(186, 165, 196)",
  },
  i: {
    mainColor: "rgb(108, 63, 95)",
    subColor: "rgb(184, 107, 156)",
    light: "rgb(218, 178, 203)",
  },
}

const borderStyle = '2px solid black'

const styles = {
  logo: {
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '134px',
    height: '44px',
    border: borderStyle,
    boxSizing: 'border-box',
  },
  ul: {
    margin: 0,
    padding: 0,
    display: 'flex',
    listStyleType: 'none',
    borderTop: borderStyle,
    borderBottom: borderStyle,
    boxSizing: 'border-box',
  },
  li: {
    width: '38px',
    height: '40px',
    display: 'inline-block',
    fontSize: '10px',
    borderRight: borderStyle,
    boxSizing: 'border-box',
  },
  img: {
    width: '28px',
    height: '28px',
    border: borderStyle,
    boxSizing: 'border-box',
    position: 'relative',
    left: 0,
    right: 0,
    bottom: '2px'
  }
}

const MenuItem = ({ text, color, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const liStyle = { ...styles.li, backgroundColor: colors[color].mainColor }
  const subColor = isHover ? colors[color].light : colors[color].subColor

  return (
    <li style={liStyle} onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }} onClick={onClick}>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '10px', textDecoration: 'none' }}>
        <div style={{ color: subColor }}>{text}</div>
        <div style={{ ...styles.img, backgroundColor: subColor }}>img</div>
      </div>
    </li>
  )
}

const MainMenu = () => {
  return (
    <nav>
      <section style={{ display: 'flex' }}>
        <h1 style={{ ...styles.logo, textAlign: 'center', verticalAlign: 'middle' }}>Brand Logo</h1>
        <ul style={ styles.ul }>
          <MenuItem text="トップ" color="a" onClick={() => console.log("TODO")}/>
          <MenuItem text="トップ" color="b" onClick={() => console.log("TODO")}/>
          <MenuItem text="トップ" color="c" onClick={() => console.log("TODO")}/>
          <MenuItem text="トップ" color="d" onClick={() => console.log("TODO")}/>
          <MenuItem text="トップ" color="e" onClick={() => console.log("TODO")}/>
          <MenuItem text="トップ" color="f" onClick={() => console.log("TODO")}/>
          <MenuItem text="トップ" color="g" onClick={() => console.log("TODO")}/>
          <MenuItem text="トップ" color="h" onClick={() => console.log("TODO")}/>
          <MenuItem text="トップ" color="i" onClick={() => console.log("TODO")}/>
        </ul>
      </section>
    </nav>
  )
}

export default MainMenu
