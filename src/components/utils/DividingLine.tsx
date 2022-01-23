import { NextPage } from "next";
import styled from "styled-components";

const StyleHr = styled.hr`
  width: 95%;
  border: 0;
  border-top: 1px solid #ffffff1a;
  margin: 0.85rem auto;
`;

const DividingLine: NextPage = () => {
  return (<StyleHr></StyleHr>)
}

export default DividingLine;
