import Link from 'next/link';
import styled from '@emotion/styled';

type Props = {
  text: string;
  href: string;
  disabled?: boolean;
};

const LI = styled.li`
  font-size: 1rem;
  border-bottom: 1px solid black;
  color: rgb(255, 162, 162);
  &:hover {
    color: rgb(255, 255, 255);
  }
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;
`;

const MenuItem = ({ text, href, disabled }: Props) => {
  return (
    <LI>
      <Link href={href} passHref>
        <A>
          {disabled
            ? <del>❤️ {text}</del>
            : <span>❤️ {text}</span>
          }
        </A>
      </Link>
    </LI>
  )
}

export default MenuItem
