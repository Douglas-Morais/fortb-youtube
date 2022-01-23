import { NextPage } from "next";
import styled from "styled-components";
import LinkIconGroup from "../utils/LinkIconGroup";

const Sidebar = styled.aside`
  aside {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    width: 240px;
    height: 100vh;
    padding-top: 3.8rem;
    z-index: -1;
  }
`;

const Sidenavbar: NextPage = () => {
  return (
    <Sidebar>
      <aside>
        <LinkIconGroup name="Home" href="/">
          <svg viewBox="0 0 24 24" focusable="false">
            <g>
              <path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path>
            </g>
          </svg>
        </LinkIconGroup>
        <LinkIconGroup name="Explorer" href="/other">
          <svg viewBox="0 0 24 24" focusable="false">
            <g>
              <path d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"></path>
            </g>
          </svg>
        </LinkIconGroup>
        <LinkIconGroup name="Subscriptions" href="/other">
          <svg viewBox="0 0 24 24" focusable="false">
            <g>
              <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path>
            </g>
          </svg>
        </LinkIconGroup>
      </aside>
    </Sidebar>
  )
}

export default Sidenavbar
