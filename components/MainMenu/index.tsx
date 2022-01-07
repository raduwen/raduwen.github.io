import React from 'react';
import styled from '@emotion/styled';
import BrandLogo from './BrandLogo';
import MenuItem from './MenuItem';

const Section = styled.section`
  display: flex;
`;

const UL = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  box-sizing: border-box;
`;

type Handler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;

type Props = {
  onTop: Handler
  onYobi: Handler
  onProfile: Handler
  onChat: Handler
  onBbs: Handler
  onIllust: Handler
  onGame: Handler
  onCGI: Handler
  onLink: Handler
};

const MainMenu = ({ onTop, onYobi, onProfile, onChat, onBbs, onIllust, onGame, onCGI, onLink }: Props) => {
  return (
    <nav>
      <Section>
        <BrandLogo />
        <UL>
          <MenuItem text="トップ" color="a" onClick={onTop}/>
          <MenuItem text="???" color="b" onClick={onYobi}/>
          <MenuItem text="プロフ" color="c" onClick={onProfile}/>
          <MenuItem text="Chat" color="d" onClick={onChat}/>
          <MenuItem text="BBS" color="e" onClick={onBbs}/>
          <MenuItem text="イラス" color="f" onClick={onIllust}/>
          <MenuItem text="ゲーム" color="g" onClick={onGame}/>
          <MenuItem text="CGI" color="h" onClick={onCGI}/>
          <MenuItem text="リンク" color="i" onClick={onLink}/>
        </UL>
      </Section>
    </nav>
  );
};

export default MainMenu;
