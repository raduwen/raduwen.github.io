import { useEffect, useState } from 'react'
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import styled from '@emotion/styled';

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

const Wrapper = styled.div`
  display: grid;

  /* aside:width / main */
  grid-template-columns: 134px 1fr;
  /* header:44px / main / footer:64px */
  grid-template-rows: 44px 1fr 64px;
  min-height: 100vh;

  /* background-color: rgb(232, 151, 151); */
  background-color: rgb(255, 128, 128);
  /* background-color: rgb(255, 115, 115); */
`;

const Header = styled.header`
  grid-row: 1;
  grid-column-start: 1;
  grid-column-end: 3;

  position: fixed;
  width: 100%;
  background-color: rgb(255, 128, 128);
}
`;

const Aside = styled.aside`
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column: 1;

  position: fixed;
  top: 44px;
  width: 134px;

  background-color: rgb(255, 128, 128);
`;

const Main = styled.main`
  grid-row: 2;
  grid-column: 2;
  margin: 4px;
`;

const Footer = styled.footer`
  grid-row: 3;
  grid-column: 2;
`;

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
    <Wrapper>
      <Header>
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
      </Header>

      <Aside>
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
      </Aside>

      <Main>
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
      </Main>

      <Footer>
        <Copyright />
      </Footer>
    </Wrapper>
  )
}
