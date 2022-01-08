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
  peca: {
    topic: (
      <>
        peca
        <br />
        peca
      </>
    ),
    items: [{ href: '#', text: 'peca' }],
  },
  game: {
    topic: (
      <>
        game
        <br />
        over
      </>
    ),
    items: [{ href: '#', text: 'game' }],
  },
  prog: {
    topic: (
      <>
        programming
        <br />
        turai
      </>
    ),
    items: [{ href: '#', text: 'prog' }],
  },
  music: {
    topic: (
      <>
        music
        <br />
        funny!
      </>
    ),
    items: [{ href: '#', text: 'piano' }],
  },
  yobi1: {
    topic: <>yobi</>,
    items: [],
  },
  yobi2: {
    topic: <>yobi</>,
    items: [],
  },
  yobi3: {
    topic: <>yobi</>,
    items: [],
  },
}

export { subMenus }
