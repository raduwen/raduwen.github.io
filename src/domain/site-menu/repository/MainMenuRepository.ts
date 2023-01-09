import type { MainMenuEntity } from '@/domain/site-menu/entity'

class MainMenuRepository {
  async getAll(): Promise<MainMenuEntity[]> {
    return new Promise((resolve) => {
      resolve([
        { color: 'a', text: 'トップ', sub: 'top', image: '/images/top.png' },
        { color: 'b', text: 'ペカ', sub: 'peca', image: '/images/stachu.png' },
        {
          color: 'c',
          text: 'ゲーム',
          sub: 'game',
          image: '/images/construction.png',
        },
        {
          color: 'd',
          text: 'プログ',
          sub: 'prog',
          image: '/images/construction.png',
        },
        {
          color: 'e',
          text: '音楽',
          sub: 'music',
          image: '/images/construction.png',
        },
        {
          color: 'f',
          text: 'イラス',
          sub: 'illus',
          image: '/images/construction.png',
        },
        { color: 'g', text: 'ホゲ', sub: 'hoge', image: '/images/hoge.png' },
        {
          color: 'h',
          text: '????',
          sub: 'yobi1',
          image: '/images/construction.png',
        },
        {
          color: 'i',
          text: '????',
          sub: 'yobi2',
          image: '/images/construction.png',
        },
      ])
    })
  }
}

export { MainMenuRepository }
