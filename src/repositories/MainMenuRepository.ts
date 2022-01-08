type MainMenuEntity = {
  color: string
  text: string
  sub: string
  image: string
}

class MainMenuRepository {
  async getAll(): Promise<MainMenuEntity[]> {
    return new Promise((resolve, _reject) => {
      resolve([
        { color: 'a', text: 'トップ', sub: 'top', image: '/images/top.png' },
        { color: 'b', text: 'ホゲ', sub: 'hoge', image: '/images/hoge.png' },
        { color: 'c', text: 'ペカ', sub: 'peca', image: '/images/stachu.png' },
        { color: 'd', text: 'ゲーム', sub: 'game', image: '/images/construction.png' },
        { color: 'e', text: 'プログ', sub: 'prog', image: '/images/construction.png' },
        { color: 'f', text: '音楽', sub: 'music', image: '/images/construction.png' },
        { color: 'g', text: '????', sub: 'yobi1', image: '/images/construction.png' },
        { color: 'h', text: '????', sub: 'yobi2', image: '/images/construction.png' },
        { color: 'i', text: '????', sub: 'yobi3', image: '/images/construction.png' },
      ])
    })
  }
}

export type { MainMenuEntity }
export { MainMenuRepository }
