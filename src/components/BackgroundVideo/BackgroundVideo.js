import React from "react";
import sample from "../../assets/bg.mp4";
import "./BackgroundVideo.scss";

export const BackgroundVideo = () => {
  return (
    <video className='bg__video' autoPlay loop muted>
      <source src={sample} type='video/mp4' />
    </video>
  );
};
