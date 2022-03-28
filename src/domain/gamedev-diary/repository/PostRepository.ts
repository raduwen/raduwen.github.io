import { zonedTimeToUtc } from 'date-fns-tz';
import type { PostEntity, PostWithoutBodyEntity } from '@/domain/gamedev-diary/entity';

const posts: PostEntity[] = [
  {
    id: 'pecaroid-0',
    project: 'pecaroid',
    title: 'プロジェクト「Pecaroid」 はじめに',
    date: zonedTimeToUtc('2022-03-28T15:00:00', 'Asia/Tokyo'),
    body: [
      {
        type: 'text', body: '自作ゲーム プロジェクト名 Pecaroid について。'
      },
      {
        type: 'h2', body: '開発環境'
      },
      {
        type: 'text', body: '開発言語: C++'
      },
      { type: 'text', body: 'ライブラリ: SFML 2' },
      { type: 'text', body: 'プラットフォーム: Windows, macOS' },
      { type: 'h2', body: 'ゲームの内容' },
      { type: 'text', body: 'アクション。いわゆるメトロイドヴァニア系。' },
      { type: 'text', body: 'オンライン協力プレイできるようにしたい。' },
      { type: 'text', body: '細かいことはまだ考えてないけど前々から作りたかった。' },
      { type: 'h2', body: '目的' },
      { type: 'text', body: 'ゲーム(コーディング)を作ることを楽しむ。' },
      { type: 'h2', body: 'なんでC++?' },
      { type: 'text', body: 'goとかでもよかったけど設計方針に合うのが見付けられなかった。' },
      { type: 'text', body: 'C/C++のバインド系は最新に追従されてないことがあるのでイヤだ。' },
      { type: 'h2', body: 'なんでSFML?' },
      { type: 'text', body: 'UnityとかUnrealとかよりもコーディングしないといけないことが多いから。' },
      { type: 'text', body: 'SDLでも良かったがデバッグUIの構築時とかに、他ライブラリの導入が必要になりそうで面倒だった。' },
      { type: 'text', body: 'またcocos2dとかその他幾つかのライブラリは設計方針が合わなさそうだった。' },
      { type: 'h2', body: '開発方針' },
      { type: 'text', body: '基盤から作る。' },
      { type: 'text', body: '必要に応じて段階的に開発する。' },
      { type: 'text', body: '見た目は最初は気にしない。' },
    ]
  }
];

const latest: PostWithoutBodyEntity[] = posts.slice(0, 10).map((post) => {
  return {
    id: post.id,
    project: post.project,
    title: post.title,
    date: post.date,
  }
});

class PostRepository {
  async getIDs(): Promise<string[]> {
    return new Promise((resolve, _reject) => {
      resolve(posts.map(p => p.id));
    });
  }
  async getLatestPostInfo(): Promise<PostWithoutBodyEntity[]> {
    return new Promise((resolve, _reject) => {
      resolve(latest);
    });
  }

  async get(id: string): Promise<PostEntity> {
    return new Promise((resolve, reject) => {
      const post = posts.find((post) => post.id == id)
      if (post !== undefined) {
        resolve(post);
      } else {
        reject({
          error: 'unknown id',
          id: id,
        });
      }
    })
  }
}

export { PostRepository };
