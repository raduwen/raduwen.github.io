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
        準備中...
        <br />
        なのじゃ
      </>
    ),
    items: [{ href: '/top', text: 'トップ' }],
  },
  hoge: {
    topic: (
      <>
        準備中...
        <br />
        なのじゃ
      </>
    ),
    items: [] /*[{ href: '#', text: 'hoge' }]*/,
  },
  peca: {
    topic: (
      <>
        ピアキャストって
        <br />
        知ってる?
      </>
    ),
    items: [] /*[{ href: '#', text: 'peca' }]*/,
  },
  game: {
    topic: <>GAME OVER!</>,
    items: [{ href: '#', text: 'game' }],
  },
  prog: {
    topic: (
      <>
        プログラミング
        <br />
        つらい...
      </>
    ),
    items: [{ href: '#', text: 'prog' }],
  },
  music: {
    topic: (
      <>
        音楽 <br /> 楽しい!
      </>
    ),
    items: [
      { href: '#', text: 'ピアノ' },
      { href: '#', text: 'ギター' },
    ],
  },
  yobi1: {
    topic: <>予備1</>,
    items: [],
  },
  yobi2: {
    topic: <>予備2</>,
    items: [],
  },
  yobi3: {
    topic: <>予備3</>,
    items: [],
  },
}

export { subMenus }
