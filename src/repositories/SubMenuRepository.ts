type SubMenuItemEntity = {
  href: string
  text: string
  disabled?: boolean
}

type SubMenuEntity = {
  topic?: string
  items: SubMenuItemEntity[]
}

const data = {
  top: {
    topic: '準備中...\nなのじゃ',
    items: [
      { href: '/top', text: 'トップ' },
      { href: '/top/raduwen', text: '管理人?' },
    ],
  },
  hoge: {
    topic: '準備中...\nなのじゃ',
    items: [],
  },
  peca: {
    topic: 'ピアキャストって\n知ってる?',
    items: [],
  },
  game: {
    topic: 'GAME OVER!',
    items: [{ href: '#', text: 'game', disabled: true }],
  },
  prog: {
    topic: 'プログラミング\nつらい...',
    items: [{ href: '#', text: 'prog', disabled: true }],
  },
  music: {
    topic: '音楽\n楽しい!',
    items: [
      { href: '#', text: 'ピアノ', disabled: true },
      { href: '#', text: 'ギター', disabled: true },
    ],
  },
  illus: {
    topic: '絵を描くのは\n難しい',
    items: [],
  },
  yobi2: {
    topic: '予備2',
    items: [],
  },
  yobi3: {
    topic: '予備3',
    items: [],
  },
}

class SubMenuRepository {
  async get(key: string): Promise<SubMenuEntity> {
    return new Promise((resolve, reject) => {
      if (data[key] === undefined) {
        reject()
      }
      resolve(data[key])
    })
  }
}

export type { SubMenuEntity }
export { SubMenuRepository }
