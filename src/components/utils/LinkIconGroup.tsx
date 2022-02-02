import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, SyntheticEvent, useEffect, useState } from "react";
import styled from "styled-components";

const LinkStyle = styled.div`
  .link-group {
    display: flex;
    align-items: center;
    background-color: transparent;
    height: 40px;
    width: 100%;
    color: ${({ theme }) => theme.colors.textColor};
    fill: ${({ theme }) => theme.colors.textColor};
    padding: 0px 24px;

    &:hover,
    &.active {
      background-color: ${({ theme }) => `${theme.colors.light}1a`};
    }

    svg,
    img {
      height: 32px;
      width: 32px;
      margin-right: 24px;
      border-radius: 50%;
    }

    img {
      height: 24px;
      width: 24px;
    }

    span {
      width: 100%;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

interface IProps {
  /**
   * Expected a single SVG Code
   * @param svg
   * @example <svg>...</svg>
   * 
   * @param img
   * @example <img>...</img>
   */
  children: ReactNode;
  href: string;
  title: string;
}

const LinkIconGroup: NextPage<IProps> = (props) => {
  const router = useRouter();

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push(props.href, undefined, {shallow: true});
  }

  const [active, setActive] = useState('');
  useEffect(() => router.asPath === props.href ? setActive("active") : undefined)

  return (
    <LinkStyle>
      <Link href={props.href}>
        <a className={`link-group ${active}`} onClick={handleClick}>
          {props.children}
          <span>{props.title}</span>
        </a>
      </Link>
    </LinkStyle>
  )
};

export default LinkIconGroup;
