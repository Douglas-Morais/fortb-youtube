import { NextPage } from "next";
import styled from "styled-components";
import DividingLine from "../utils/DividingLine";
import LinkIconGroup from "../utils/LinkIconGroup";
import SignInButton from "../utils/SignInButton";

const Sidebar = styled.aside`
  position: fixed;
  width: 240px;
  height: ${({ theme }) => `calc(100vh - ${theme.metric.topNavbar})`};
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => `${theme.colors.secondaryBackground} ${theme.colors.light}99`};

  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.secondaryBackground};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => `${theme.colors.light}00`};
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.colors.secondaryBackground};
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #bababa87;
  }

  .signin {
    padding: 0px 32px;
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 14px;
  }

  h3 {
    padding: 4px 24px 12px 24px;
    margin: 0;
    color: ${({ theme }) => `${theme.colors.textColorDisabled}`};
    font-size: 14px;
    letter-spacing: .5px;
    font-weight: 500;
  }

  #copyright {
    color: ${({ theme }) => `${theme.colors.textColorDisabled}`};
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    padding: 4px 24px 12px 24px;
    width: 100%;
    height: 100px;
  }
`;

const Sidenavbar: NextPage = () => {
  return (
    <Sidebar>
      <LinkIconGroup name="Home" href="/">
        <svg viewBox="0 0 24 24" focusable="false">
          <g>
            <path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path>
          </g>
        </svg>
      </LinkIconGroup>
      <LinkIconGroup name="Explorer" href="/explorer">
        <svg viewBox="0 0 24 24" focusable="false">
          <g>
            <path d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"></path>
          </g>
        </svg>
      </LinkIconGroup>
      <LinkIconGroup name="Subscriptions" href="/subscriptions">
        <svg viewBox="0 0 24 24" focusable="false">
          <g>
            <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path>
          </g>
        </svg>
      </LinkIconGroup>

      <DividingLine></DividingLine>

      <LinkIconGroup name="Library" href="/library">
        <svg viewBox="0 0 24 24" focusable="false">
          <g>
            <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
          </g>
        </svg>
      </LinkIconGroup>
      <LinkIconGroup name="History" href="/history">
        <svg viewBox="0 0 24 24" focusable="false">
          <g><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"></path></g>
        </svg>
      </LinkIconGroup>

      <DividingLine></DividingLine>

      <div className="signin">
        <p>Sign in to like videos, comment, and subscribe.</p>
        <SignInButton></SignInButton>
      </div>

      <DividingLine></DividingLine>

      <h3>BEST OF YOUTUBE</h3>

      <LinkIconGroup name="Music" href="/channel/music">
        <img src="https://yt3.ggpht.com/8siyrWVrP2JoHXw_o-rNk25TwzPPlclq9-4LkJ6LL7Irk0_ovqVjO2e1jVSb7iVcJDKj3TFDMk8=s88-c-k-c0x00ffffff-no-rj" />
      </LinkIconGroup>

      <LinkIconGroup name="Sports" href="/channel/sports">
        <img src="https://yt3.ggpht.com/uhzNRSSq4A8dfIaOjCBJSMRU5BFoWkBIYYA3iBdZvZxHYkWWFSG9deg-Stej4yQdFv0u9KxJ=s88-c-k-c0x00ffffff-no-rj" />
      </LinkIconGroup>

      <LinkIconGroup name="Gaming" href="/channel/gaming">
        <img src="https://yt3.ggpht.com/DPTcl8E8QEA8ceqrPBi1i4nm3ufq8at1ybHQWcEQ9hsAtZo70FmC7HB6Fl9iBhqAB76cxGRuGfg=s88-c-k-c0x00ffffff-no-rj" />
      </LinkIconGroup>

      <LinkIconGroup name="Movies" href="/channel/movies">
        <img src="https://yt3.ggpht.com/6lo97rUTO7xhIBXZqLiaW2kA_eMBIEmqc27EqlKLyE4nAY-yzcKBG0Hs0YdUka3gJ629HcwgyzQ=s88-c-k-c0x00ffffff-no-rj" />
      </LinkIconGroup>

      <LinkIconGroup name="News" href="/channel/news">
        <img src="https://yt3.ggpht.com/R71nRxVlLnQs7DnQICeIzoaNrpDXxmhjq2ULvHSNeStICjFD5ygqyFvKxKyUivjah6rUlAFWlQY=s88-c-k-c0x00ffffff-no-rj" />
      </LinkIconGroup>

      <LinkIconGroup name="Live" href="/channel/live">
        <img src="https://yt3.ggpht.com/8D6JlsnvwDZFMdcbjqVji82kggP3aXXbO-yBD0RFrKlp4G1zNt9wcqcVTSPnAI8GuUAbDYQwsg=s88-c-k-c0x00ffffff-no-rj" />
      </LinkIconGroup>

      <LinkIconGroup name="Learning" href="/channel/learning">
        <img src="https://yt3.ggpht.com/6h1hHijctH34LA2wXzXt4jiPELRQGG1_LyfbEohjfbG4t5gHqirz8Mn68WEG8W0rFsdwbz8DGQ=s88-c-k-c0x00ffffff-no-rj" />
      </LinkIconGroup>

      <LinkIconGroup name="Music" href="/channel/">
        <img src="https://yt3.ggpht.com/xezV7Q9aPgcmyx3fcFsbizYL-wvm6O4UpEubIDBZNqaQdfb8k6SBp1xu8s4WH_Q-FNfkhNGwVw=s88-c-k-c0x00ffffff-no-rj" />
      </LinkIconGroup>

      <LinkIconGroup name="360° Video" href="/channel/360video">
        <img src="https://yt3.ggpht.com/XqoajHMBdMmDPQlm9yiL4wr7LVhN1OPv_uU8oBRzbgtBi0mDAbBa13zIRKCoVAZNHPGFQSW21Kk=s88-c-k-c0x00ffffff-no-rj" />
      </LinkIconGroup>

      <DividingLine></DividingLine>

      <div id="copyright">
        <p>
          © 2022 Frontend <br />
          Dev. Douglas Morais
        </p>
      </div>

    </Sidebar>
  )
}

export default Sidenavbar
