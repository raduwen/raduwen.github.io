type SubMenuItemEntity = {
  href: string
  text: string
}

type SubMenuEntity = {
  topic?: string
  items: SubMenuItemEntity[]
}

const data = {
  top: {
    topic: '準備中...\nなのじゃ',
    items: [{ href: '/top', text: 'トップ' }],
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
    items: [{ href: '#', text: 'game' }],
  },
  prog: {
    topic: 'プログラミング\nつらい...',
    items: [{ href: '#', text: 'prog' }],
  },
  music: {
    topic: '音楽\n楽しい!',
    items: [
      { href: '#', text: 'ピアノ' },
      { href: '#', text: 'ギター' },
    ],
  },
  yobi1: {
    topic: '予備1',
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
