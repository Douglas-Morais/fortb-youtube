import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

const ChipStyle = styled.button`
  outline: 0;
  font-size: 14px;
  color: ${({theme}) => theme.colors.textColor};
  background-color: ${({theme}) => theme.colors.gray};
  padding: 8px 16px;
  border: .5px solid ${({theme}) => `${theme.colors.light}1a`};
  border-radius: 20px;
  margin: 0px 4px;
`;

interface IChip {
  name: string;
}

const ChipButton: NextPage<IChip> = (props) => {
  return (<ChipStyle>{props.name}</ChipStyle>)
}

export default ChipButton;
