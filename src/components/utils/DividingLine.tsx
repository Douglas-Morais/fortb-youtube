import { NextPage } from "next";
import styled from "styled-components";

const StyleHr = styled.hr`
  width: 95%;
  border: 0;
  border-top: 1px solid #ffffff1a;
  margin: 0.85rem auto;

  &.reset {
    margin: 0;
    width: 100%;
  }
`;

interface IDividingLine {
  resetMargin?: boolean;
}

const DividingLine: NextPage<IDividingLine> = (props) => {
  return (<StyleHr className={props.resetMargin ? 'reset' : ''}></StyleHr>)
}

export default DividingLine;
