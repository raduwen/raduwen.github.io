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
    color: 'rgb(255, 162, 162)',
    textDecoration: 'none',
  },
}

const SubMenu = () => {
  return (
    <nav style={{ backgroundColor: '#e89797', paddingBottom: '64px' }}>
      <section>
        <h2 style={ styles.title }>まずはここを<br/>チェックじゃ〜</h2>
        <ul style={ styles.ul }>
          <li style={ styles.li }><a style={ styles.a } href="#">トップページ</a></li>
          <li style={ styles.li }><a style={ styles.a } href="#">はじめに</a></li>
          <li style={ styles.li }><a style={ styles.a } href="#">質問&amp;サポート</a></li>
        </ul>
      </section>
    </nav>
  )
}

export default SubMenu
