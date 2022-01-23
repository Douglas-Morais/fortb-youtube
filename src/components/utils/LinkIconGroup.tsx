import { NextPage } from "next";
import styled from "styled-components";

const Link = styled.div`
  .link-group {
    display: flex;
    align-items: center;
    background-color: transparent;
    height: 40px;
    width: 100%;
    color: ${({ theme }) => theme.colors.textColor};
    fill: ${({ theme }) => theme.colors.textColor};
    padding: 0px 24px;

    &:hover {
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
  name: string;
}

const LinkIconGroup: NextPage<IProps> = (props) => {
  return (<Link>
    <a href="/" className="link-group">
      {props.children}
      <span>{props.name}</span>
    </a>
  </Link>)
};

export default LinkIconGroup;
