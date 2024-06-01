import React from "react";

const VideoPlayer = ({ src }: { src: string }) => {
  return (
    <video
      style={{ borderRadius: 10 }}
      width="500"
      height="500"
      preload="auto"
      controls
      //controlsList="nodownload"
    >
      <source src={src} type="video/mp4" />
      <track kind="subtitles" srcLang="en" label="English" />
    </video>
  );
};

export default VideoPlayer;
