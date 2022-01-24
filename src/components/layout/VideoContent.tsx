import { NextPage } from "next";
import styled from "styled-components";
import ChipButton from "../utils/ChipButton";
import DividingLine from "../utils/DividingLine";
import VideoContainer from "../utils/VideoContainer";

const Style = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};

  #chips {
    display: flex;
    flex-wrap: nowrap;
    padding: 10px 20px;
    white-space: nowrap;
  }

  #videos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 3rem 1rem;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
  }
`;

const chips = [
  "All", "NextJS", "FrontEnd", "FortBrasil", "Development", "VScode",
  "Backend", "NestJS", "Tech Week", "Technology", "systems", "full stack",
  "Scrum", "Agile methodology"
];

const videos = new Array(16).fill("");

const VideoContent: NextPage = () => {
  return (
  <Style>
    <DividingLine resetMargin={true}></DividingLine>
    <section id="chips">
      {chips.map((chip, i) => <ChipButton name={chip} key={i}></ChipButton>)}
    </section>

    <DividingLine resetMargin={true}></DividingLine>

    <section id="videos">
      { videos.map((video, i) => <VideoContainer key={i}></VideoContainer>) }
    </section>

  </Style>)
}

export default VideoContent;
