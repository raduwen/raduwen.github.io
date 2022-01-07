import styled from '@emotion/styled';

const H1 = styled.h1`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 134px;
  height: 44px;
  border: 2px solid black;
  box-sizing: border-box;
  background-color: gray;
  text-align: center;
  vertical-align: middle;
`;

const BrandLogo = () => <H1>Brand Logo</H1>;

export default BrandLogo;
