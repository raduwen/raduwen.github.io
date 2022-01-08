type SubMenuItemProps = {
  href: string
  text: string
}

type SubMenuInfoProps = {
  topic: JSX.Element
  items: SubMenuItemProps[]
}

const subMenus: { [key: string]: SubMenuInfoProps } = {
  top: {
    topic: (
      <>
        hello
        <br />
        world
      </>
    ),
    items: [
      { href: '#', text: 'hoge' },
      { href: '#', text: 'fuga' },
      { href: '#', text: 'fuga' },
      { href: '#', text: 'fuga' },
    ],
  },
  hoge: {
    topic: (
      <>
        hoge
        <br />
        hoge
      </>
    ),
    items: [{ href: '#', text: 'hoge' }],
  },
}

export { subMenus }
