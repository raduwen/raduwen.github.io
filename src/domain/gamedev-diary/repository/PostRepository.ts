import { zonedTimeToUtc } from 'date-fns-tz';
import type { PostEntity, PostWithoutBodyEntity } from '@/domain/gamedev-diary/entity';

const posts: PostEntity[] = [
  {
    id: 'pecaroid-5',
    project: 'pecaroid',
    title: 'Pecaroid#5 デバッグメニュー',
    date: zonedTimeToUtc('2022-04-01T16:00:00', 'Asia/Tokyo'),
    body: [
      { type: 'text', body: 'デバッグ機能を楽に使えるようにデバッグメニューを実装しました。' },
      { type: 'text', body: 'ここで少しアーキテクチャとか設計しなおしたくなってきているので、一旦整理のフェーズに入りたい。'},
      { type: 'image', attributes: { src: '/images/pecaroid5-1.png', layout: 'responsive', width: '642', height: '512' } }
    ]
  },
  {
    id: 'pecaroid-4',
    project: 'pecaroid',
    title: 'Pecaroid#4 FPSの計算',
    date: zonedTimeToUtc('2022-03-31T16:25:00', 'Asia/Tokyo'),
    body: [
      { type: 'h2', body: 'FPS' },
      { type: 'text', body: '1フレーム間の処理時間からFPSを計算するクラスを追加しました。' },
      { type: 'text', body: '尚、FPSによって制御するような仕組みは導入しません。' },
      { type: 'text', body: '一旦計算してどういう方針で開発するのがいいか探っていくことにします。' },
      { type: 'h2', body: 'デバッグUI' },
      { type: 'text', body: 'まだまだ簡易版ですがデバッグ用のUIを追加しました。' },
      { type: 'image', attributes: { src: '/images/pecaroid4-1.png', layout: 'responsive', width: '642', height: '512' } }
    ]
  },
  {
    id: 'pecaroid-3',
    project: 'pecaroid',
    title: 'Pecaroid#3 入力の管理',
    date: zonedTimeToUtc('2022-03-30T17:00:00', 'Asia/Tokyo'),
    body: [
      { type: 'text', body: 'Aボタンはxxxとyyyと…という具合に複数設定できるように設計。' },
      { type: 'text', body: 'また入力元はキーボードとパッドそれぞれ対応しておいた。' },
      { type: 'text', body: '一旦マウスは無視。ゲーム内で使う予定はあんまないので。' },
      { type: 'text', body: 'あとこの機能のデバッグ用のシーンもとりあえず追加。' },
      { type: 'text', body: '将来的にゲーム内から入力設定をできるようにしないといけない。' },
      { type: 'text', body: '複数接続したときとかパッド周りはややめんどいことになりそう。' },
      { type: 'image', attributes: { src: '/images/pecaroid3-1.png', layout: 'responsive', width: '642', height: '512' } }
    ]
  },
  {
    id: 'pecaroid-2',
    project: 'pecaroid',
    title: 'Pecaroid#2 シーンの管理',
    date: zonedTimeToUtc('2022-03-29T17:50:00', 'Asia/Tokyo'),
    body: [
      { type: 'image', attributes: { src: '/images/pecaroid2-1.png', layout: 'responsive', width: '752', height: '640' } },
      { type: 'text', body: 'シーンの管理を実装しました。' },
      { type: 'text', body: 'プレイ→メニュー→プレイみたいな時にどこからメニューに来たってのをメニューが知らなくてもいいようにスタックするようにしました。' },
      { type: 'image', attributes: { src: '/images/pecaroid2-2.png', layout: 'responsive', width: '542', height: '55' } },
      { type: 'h2', body: 'アセット管理' },
      { type: 'text', body: 'デバッグプリントを画面にしたかったのでフォントを管理したくなりました。' },
      { type: 'text', body: 'プロトタイプとしてFontManagerを用意しました。' },
    ]
  },
  {
    id: 'pecaroid-1',
    project: 'pecaroid',
    title: 'Pecaroid#1 基礎の基礎',
    date: zonedTimeToUtc('2022-03-28T19:39:00', 'Asia/Tokyo'),
    body: [
      { type: 'text', body: 'ウィンドウを表示する、メインループといった基礎的な部分を作った。' },
      { type: 'text', body: 'アプリケーションを管理するApplicationクラス、ゲームを管理するGameクラスを分離。' },
      { type: 'text', body: 'Applicationにsf::RenderWindow, Gameを持たせて、一旦ゲームのメインループはApplication内で持たせた。' },
      { type: 'text', body: 'ウィンドウの管理はApplicationでやるようにしたので、イベント処理や画面クリアなどはApplicationでやらせる。' },
      { type: 'text', body: 'ゲームの更新処理と描画処理をゲームクラスに担わせた。' },
      { type: 'text', body: 'と言っても中は空なんだけど…。' },
      { type: 'image', attributes: { src: '/images/pecaroid1-1.png', layout: 'responsive', width: '752', height: '620' } },
      { type: 'h2', body: 'その他' },
      { type: 'text', body: 'マルチプラットフォーム対応する上でビルドも楽にしたかったのでCMakeを導入。' },
      { type: 'text', body: 'ドキュメントを残した方がいいのでDoxygenも導入。' },
    ]
  },
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
      { type: 'text', body: 'goとかでもよかったけど設計方針に合うライブラリがパッと見付けられなかった。' },
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
