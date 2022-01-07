import { useEffect, useState } from 'react'
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

import { initFirebase } from '@/lib/firebase/initFirebase';

import Logo from '@/components/Logo'
import Copyright from '@/components/Copyright'
import MainMenu from '@/components/MainMenu'
import {
  TopSubMenu,
  YobiSubMenu,
  ProfileSubMenu,
  ChatSubMenu,
  BbsSubMenu,
  IllustSubMenu,
  GameSubMenu,
  CGISubMenu,
  LinkSubMenu,
} from '@/components/SubMenu'
import Box, { BoxBody, BoxBar } from '@/components/Box'
import styles from '@/styles/layout.module.css'

type News = {
  date: Date;
  topics: string[];
};

export default function HomePage() {
  const [currentSubMenu, setCurrentSubMenu] = useState('top');
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const f = async () => {
      const { firestore } = initFirebase();

      const ns: News[] = [];
      const q = query(collection(firestore, "news"), orderBy("date", "desc"), limit(10));
      const qSnap = await getDocs(q);
      qSnap.forEach((doc) => {
        const data = doc.data();
        const report = {
          date: new Date(data.date.seconds * 1000),
          topics: data.topics,
        };
        ns.push(report);
      });
      setNews(ns);
    };
    f();
  }, []);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <MainMenu
          onTop={() => { setCurrentSubMenu('top') }}
          onYobi={() => { setCurrentSubMenu('yobi') }}
          onProfile={() => { setCurrentSubMenu('profile') }}
          onChat={() => { setCurrentSubMenu('chat') }}
          onBbs={() => { setCurrentSubMenu('bbs') }}
          onIllust={() => { setCurrentSubMenu('illust') }}
          onGame={() => { setCurrentSubMenu('game') }}
          onCGI={() => { setCurrentSubMenu('cgi') }}
          onLink={() => { setCurrentSubMenu('link') }}
        />
      </header>

      <aside className={styles.aside}>
        {currentSubMenu == 'top' ? <TopSubMenu /> :
         currentSubMenu == 'yobi' ? <YobiSubMenu /> :
         currentSubMenu == 'profile' ? <ProfileSubMenu /> :
         currentSubMenu == 'chat' ? <ChatSubMenu /> :
         currentSubMenu == 'bbs' ? <BbsSubMenu /> :
         currentSubMenu == 'illust' ? <IllustSubMenu /> :
         currentSubMenu == 'game' ? <GameSubMenu /> :
         currentSubMenu == 'cgi' ? <CGISubMenu /> :
         currentSubMenu == 'link' ? <LinkSubMenu /> :
         null}
      </aside>

      <main className={styles.main}>
        <Box>
          <BoxBar>ほげ</BoxBar>
          <BoxBody>
            <section>
              <Logo />
              <p>
                まだ何もないんじゃ。<br />
                SPAにしてもええかもと思っとる。<br />
                素材用意するのが大変じゃ。
              </p>
            </section>

            <section>
              <h2>NEWS</h2>
              <dl>
                {news.map((record) => (
                  <>
                    <dt>{record.date.toLocaleString('ja-Jp', { year: 'numeric', month: 'numeric', day: 'numeric' })}</dt>
                    {record.topics.map((topic, i) => <dd key={`${record.date.getTime()}-${i}`}>{topic}</dd>)}
                  </>
                ))}
              </dl>
            </section>

            <section>
              <h2>ToDo</h2>
              <ul>
                <li>各種素材</li>
                <li>メッセージ用コンポーネント</li>
                <li>各ページ</li>
                <li>永続化検討</li>
                <li>各サービス/アプリ</li>
              </ul>
              <p>
                気が向いたら更新するのじゃ。
              </p>
            </section>
          </BoxBody>
          <BoxBar>ふが</BoxBar>
        </Box>
      </main>

      <footer className={styles.footer}>
        <Copyright />
      </footer>
    </div>
  )
}
