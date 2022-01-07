import { ReactNode } from 'react'
import styled from '@emotion/styled';

import MenuItem from './MenuItem'
import Topic from './Topic'

const SubMenu = ({ children }: { children: ReactNode }) => {
  return (
    <nav>
      <section>
        {children}
      </section>
    </nav>
  );
};

const UL = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  border-right: 1px solid black;
  border-left: 1px solid black;
  background-color: rgb(181, 91, 91);
`;

const TopSubMenu = () => {
  return (
    <SubMenu>
      <Topic>まずはここを<br/>チェックじゃ〜</Topic>
      <UL>
        <MenuItem href="/top" text="トップページ" />
        <MenuItem href="#" text="はじめに" disabled />
        <MenuItem href="#" text="質問&サポート" disabled />
      </UL>
    </SubMenu>
  );
};

const YobiSubMenu = () => {
  return (
    <SubMenu>
      <Topic>予備スペース!<br/>予備なんです!</Topic>
    </SubMenu>
  );
};

const ProfileSubMenu = () => {
  return (
    <SubMenu>
      <Topic>管理人のこと<br/>いろいろある</Topic>
      <UL>
        <MenuItem href="#" text="かんりにん？" disabled />
        <MenuItem href="#" text="拝啓、管理人" disabled />
        <MenuItem href="#" text="ひなにこ通信" disabled />
        <MenuItem href="#" text="日記とコラム" disabled />
        <MenuItem href="#" text="管理人のふるさと紹介" disabled />
      </UL>
    </SubMenu>
  );
};

const ChatSubMenu = () => {
  return (
    <SubMenu>
      <Topic>チャットの<br/>コーナーよん</Topic>
      <UL>
        <MenuItem href="#" text="メインチャット1.4" disabled />
        <MenuItem href="#" text="フミ子チャットver5" disabled />
      </UL>
    </SubMenu>
  );
};

const BbsSubMenu = () => {
  return (
    <SubMenu>
      <Topic>掲示板だよ！<br/>書いてちょ</Topic>
      <UL>
        <MenuItem href="#" text="あいさつ掲示板" disabled />
        <MenuItem href="#" text="普通の掲示板" disabled />
      </UL>
    </SubMenu>
  );
};

const IllustSubMenu = () => {
  return (
    <SubMenu>
      <Topic>イラストです<br/>みるですか</Topic>
      <UL>
        <MenuItem href="#" text="超イラスト集" disabled />
        <MenuItem href="#" text="絵板(練習)" disabled />
        <MenuItem href="#" text="絵板(本番)" disabled />
        <MenuItem href="#" text="オエビ祭り板" disabled />
        <MenuItem href="#" text="待ち受け作成板" disabled />
      </UL>
    </SubMenu>
  );
};

const GameSubMenu = () => {
  return (
    <SubMenu>
      <Topic>ゲームだぜ<br/>イエイ！</Topic>
      <UL>
        <MenuItem href="#" text="ゲームキャラ集" disabled />
        <MenuItem href="#" text="ゲーム日記を作る" disabled />
        <MenuItem href="#" text="RPGツクール" disabled />
      </UL>
    </SubMenu>
  );
};

const CGISubMenu = () => {
  return (
    <SubMenu>
      <Topic>CGIの研究を<br/>するとこです。</Topic>
      <UL>
        <MenuItem href="#" text="管理人の研究" disabled />
        <MenuItem href="#" text="超簡易掲示板" disabled />
        <MenuItem href="#" text="超マニア小説集" disabled />
        <MenuItem href="#" text="超マニア広辞苑" disabled />
        <MenuItem href="#" text="超アンケート" disabled />
        <MenuItem href="#" text="BMコレクション" disabled />
      </UL>
    </SubMenu>
  );
};

const LinkSubMenu = () => {
  return (
    <SubMenu>
      <Topic>リンクだよっ<br/>お宅ほうもーん♪</Topic>
      <UL>
        <MenuItem href="#" text="ドット絵サイトリンク" disabled />
        <MenuItem href="#" text="ドット絵同好会" disabled />
        <MenuItem href="#" text="愛の名簿リンク集" disabled />
        <MenuItem href="#" text="バナー置き場" disabled />
      </UL>
    </SubMenu>
  );
};

export {
  TopSubMenu,
  YobiSubMenu,
  ProfileSubMenu,
  ChatSubMenu,
  BbsSubMenu,
  IllustSubMenu,
  GameSubMenu,
  CGISubMenu,
  LinkSubMenu,
};

export default SubMenu;
