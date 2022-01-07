import { useState } from 'react'
import styled from '@emotion/styled';

type Color = {
  dark: string;
  normal: string;
  light: string;
};

type ColorKey = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i';

type Colors = {
  [key: string]: Color;
};

const colors: Colors = {
  a: {
    dark: "rgb(146, 86, 70)",
    normal:  "rgb(175, 115, 116)",
    light: "rgb(203, 140, 142)",
  },
  b: {
    dark: "rgb(95, 82, 55)",
    normal: "rgb(177, 152, 116)",
    light: "rgb(202, 184, 159)",
  },
  c: {
    dark: "rgb(87, 93, 65)",
    normal: "rgb(132, 141, 98)",
    light: "rgb(167, 174, 142)",
  },
  d: {
    dark: "rgb(73, 104, 80)",
    normal: "rgb(101, 159, 119)",
    light: "rgb(158, 196, 169)",
  },
  e: {
    dark: "rgb(61, 78, 75)",
    normal: "rgb(102, 151, 139)",
    light: "rgb(152, 185, 178)",
  },
  f: {
    dark: "rgb(77, 90, 96)",
    normal: "rgb(107, 133, 153)",
    light: "rgb(175, 190, 201)",
  },
  g: {
    dark: "rgb(70, 68, 95)",
    normal: "rgb(113, 98, 160)",
    light: "rgb(175, 169, 202)",
  },
  h: {
    dark: "rgb(88, 71, 101)",
    normal: "rgb(133, 99, 151)",
    light: "rgb(186, 165, 196)",
  },
  i: {
    dark: "rgb(108, 63, 95)",
    normal: "rgb(184, 107, 156)",
    light: "rgb(218, 178, 203)",
  },
};

const LI = styled.li`
  width: 38px;
  height: 40px;
  display: inline-block;
  font-size: 1rem;
  border-right: 2px solid black;
  box-sizing: border-box;
  background-color: ${(props: { color: ColorKey }) => colors[props.color].dark};
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  text-decoration: none;
`;

type ThemeProps = {
  color: ColorKey;
  light: boolean;
};

const MenuItemText = styled.div`
  transform: scale(0.8);
  font-weight: bold;
  color: ${(props: ThemeProps) => colors[props.color][props.light ? 'light' : 'normal']};
`;

const MenuItemImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid black;
  box-sizing: border-box;
  position: relative;
  left: 0;
  right: 0;
  bottom: 2px;
  background-image: url(/stachu.gif);
  background-color: ${(props: ThemeProps) => colors[props.color][props.light ? 'light' : 'normal']};
`;

type Handler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;

type Props = {
  text: string;
  color: ColorKey;
  onClick: Handler;
};

const MenuItem = ({ text, color, onClick }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <LI color={color} onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }} onClick={onClick}>
      <Wrapper>
        <MenuItemText color={color} light={isHover}>{text}</MenuItemText>
        <MenuItemImage color={color} light={isHover}></MenuItemImage>
      </Wrapper>
    </LI>
  );
};

export default MenuItem;
