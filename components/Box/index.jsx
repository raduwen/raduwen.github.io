const borderStyle = '2px solid black'

const style = {
  body: {
    backgroundColor: 'rgb(255, 221, 187)',
    padding: '16px 32px',
    borderBottom: borderStyle,
  },
  bar: {
    borderBottom: borderStyle,
    backgroundColor: 'rgb(85, 119, 35)',
  }
}

const Box = ({ children }) => {
  return (
    <div style={{ borderTop: borderStyle, borderRight: borderStyle, borderLeft: borderStyle, width: '75%' }}>
      {children}
    </div>
  )
}

const BoxBody = ({ children }) => {
  return (
    <div style={style.body}>
      {children}
    </div>
  )
}

const BoxBar = ({ children }) => {
  return (
    <div style={style.bar}>
      {children}
    </div>
  )
}

export { BoxBody, BoxBar }
export default Box
