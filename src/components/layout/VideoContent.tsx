import { NextPage } from "next";
import styled from "styled-components";
import ChipButton from "../utils/ChipButton";
import DividingLine from "../utils/DividingLine";

const Style = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};

  #chips {
    display: flex;
    flex-wrap: nowrap;
    padding: 10px 20px;
    white-space: nowrap;
  }
`;

const chips = [
  "All", "NextJS", "FrontEnd", "FortBrasil", "Development", "VScode",
  "Backend", "NestJS", "Tech Week", "Technology", "systems", "full stack",
  "Scrum", "Agile methodology"
];

const VideoContent: NextPage = () => {
  return (
  <Style>
    <DividingLine resetMargin={true}></DividingLine>
    <section id="chips">
      {chips.map((chip, i) => <ChipButton name={chip} key={i}></ChipButton>)}
    </section>
  </Style>)
}

export default VideoContent;
