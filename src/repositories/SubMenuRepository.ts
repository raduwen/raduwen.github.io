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
  peca: {
    topic: 'ピアキャストって\n知ってる?',
    items: [
      { href: '/peca/about', text: 'ピアキャストって何?' },
      { href: '/peca/about_stachu', text: 'すたちゅーって何?' },
    ],
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
  hoge: {
    topic: '準備中...\nなのじゃ',
    items: [],
  },
  yobi1: {
    topic: '予備1',
    items: [],
  },
  yobi2: {
    topic: '予備2',
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
