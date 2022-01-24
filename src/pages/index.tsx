import type { NextPage } from 'next'
import Head from 'next/head'
import Topnavbar from '../components/layout/Topnavbar'
import Sidenavbar from '../components/layout/Sidenavbar'
import styled, { DefaultTheme, ThemeProvider } from 'styled-components'
import VideoContent from '../components/layout/VideoContent'
import { GlobalStyle } from '../styles/globals.style'
import { darkTheme } from '../styles/theme/dark.theme'
import { lightTheme } from '../styles/theme/light.theme'
import { useState } from 'react'

const Style = styled.div`
  display: grid;
  grid-template-rows: ${({ theme }) => `${theme.metric.topNavbar} calc(100vh - ${theme.metric.topNavbar})`};
  grid-template-columns: 240px 1fr;
  grid-template-areas:
    "top top"
    "side main";

  .bar {
    &-top{
      grid-area: top;
    }
    &-side{
      grid-area: side;
    }
  }

  .main {
    grid-area: main;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => `${theme.colors.secondaryBackground} ${theme.colors.light}99`};

    &::-webkit-scrollbar {
      width: 14px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.secondaryBackground};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => `${theme.colors.light}55`};
      border-radius: 20px;
      border: 2px solid ${({ theme }) => theme.colors.secondaryBackground};
    }
  }
`;

const Home: NextPage = () => {
  const [theme, setTheme] = useState<DefaultTheme>(darkTheme);

  const toggleTheme = () => {
    theme.name === 'light' ? setTheme(darkTheme) : setTheme(lightTheme);
    console.log('Toggle theme!');
  };

  return (<>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Head>
        <title>Youtube Clone layout</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <link rel="shortcut icon" href="/icons/logo-youtube.png" type="image/x-icon" />
      </Head>

      <Style>
        <div className='bar-top'><Topnavbar onGetTheme={toggleTheme}></Topnavbar></div>
        <div className='bar-side'><Sidenavbar></Sidenavbar></div>
        <div className='main'><VideoContent></VideoContent></div>
      </Style>
    </ThemeProvider>
  </>)
}

export default Home
