import { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Style = styled.article`
display: flex;
flex-direction: column;

.thumbnail {
  position: relative;
  display: flex;

  &::before {
    content: attr(data-duration);
    position: absolute;
    right: 5px;
    bottom: 5px;
    background-color: rgba(0, 0, 0, .85);
    color: white;
    padding: .1em .3em;
    border-radius: .3em;
    font-size: .85rem;
  }

  &-bg,
  &-image {
    width: 100%;
    height: 100%;
    min-width: 250px;
    min-height: 150px;
    background-color: ${({ theme }) => theme.colors.gray};
  }
}

.channel-icon {
  margin-right: .75rem;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.gray};
}

.video {
  &-bottom-section {
    display: flex;
    align-items: flex-start;
    margin-top: 1rem;
  }

  &-details {
    display: flex;
    flex-direction: column;
  }

  &-title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: .5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
  }

  &-channel-name {
    margin-bottom: .1rem;
    text-decoration: none;
    font-size: .85rem;
    color: ${({ theme }) => theme.colors.gray};
  }

  &-metadata {
    font-size: .85rem;
    color: ${({ theme }) => theme.colors.gray};
  }

  &-section-title {
    grid-column: 1 / -1;
    margin: -.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .5rem;

    &-close {
      border: none;
      background: none;
      padding: 0;
      font-size: 2rem;
      color: #555;
      cursor: pointer;
    }
  }
}
`;

const VideoContainer: NextPage = () => {
  const [thumbnail, setThumbnail] = useState("");
  const [channelIcon, setChannelIcon] = useState("");

  function getImage() {
    fetch("https://picsum.photos/350/150")
      .then((resp) => {
        setThumbnail(resp.url)
      })
    fetch("https://picsum.photos/36/36")
      .then((resp) => {
        setChannelIcon(resp.url)
      })
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <Style>
      <a href="#" className="thumbnail" data-duration="12:24" onClick={getImage}>
        <div className="thumbnail-bg">
          {thumbnail ? <img className="thumbnail-image" src={thumbnail} /> : <img></img>}
        </div>
      </a>
      <div className="video-bottom-section">
        <a href="#">
          {channelIcon ? <img className="channel-icon" src={channelIcon} /> : <img></img>}
        </a>
        <div className="video-details">
          <a href="#" className="video-title">Video Title</a>
          <a href="#" className="video-channel-name">Channel Name</a>
          <div className="video-metadata">
            <span>12K views</span>
            •
            <span>1 week ago</span>
          </div>
        </div>
      </div>
    </Style>)
}

export default VideoContainer;
