import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: ${({theme}) => theme.colors.textColor};
  background: ${({theme}) => theme.colors.secondaryBackground};

  svg {
    fill: ${({theme}) => theme.colors.textColor};
    width: 1.5rem;
    height: auto;
    margin-right: 1.5rem;
    cursor: pointer;
  }

  h1 {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

const OthersPage: NextPage = () => {
  return (<Style>
    <Link href="/" shallow={true}>
      <svg focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z"></path></svg>
    </Link>
    <h1>Página em construção...</h1>
  </Style>)
}

export default OthersPage;
