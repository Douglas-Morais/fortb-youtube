import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, SyntheticEvent } from "react";
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

    svg {
      height: 24px;
      width: 24px;
      margin-right: 24px;
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
   * @example
   * <svg>...</svg>
   */
  children: ReactNode;
  href: string;
  name: string;
}

const LinkIconGroup: NextPage<IProps> = (props) => {
  const router = useRouter();

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push(props.href);
  }

  return (
    <LinkStyle>
      <Link href={props.href} shallow={true}>
        <a className={`link-group ${router.asPath === props.href ? 'active' : ''}`} onClick={handleClick}>
          {props.children}
          <span>{props.name}</span>
        </a>
      </Link>
    </LinkStyle>
  )
};

export default LinkIconGroup;
