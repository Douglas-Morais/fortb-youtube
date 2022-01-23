import { NextPage } from "next";
import styled from "styled-components";

const Style = styled.hr`
  width: 95%;
  border: 0;
  border-top: 1px solid #ffffff1a;
  margin: 1rem auto;
`;

const DividingLine: NextPage = () => {
  return (<Style></Style>)
}

export default DividingLine;
