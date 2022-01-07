import styled from '@emotion/styled';

const border = '2px solid black';

const BoxBody = styled.div`
  background-color: rgb(255, 221, 187);
  padding: 1.6rem 3.2rem;
`;

const BoxBar = styled.div`
  background-color: rgb(85, 119, 35);

  &:first-child {
    border-bottom: ${border}
  }

  &:last-child {
    border-top: ${border}
  }
`;

const Box = styled.div`
  border: ${border};
  width: 75%;
  min-width: 396px;
`;

export { BoxBody, BoxBar };
export default Box;
