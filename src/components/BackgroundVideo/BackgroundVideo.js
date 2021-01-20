import React from "react";
import sample from "../../assets/bg.mp4";
import { Backdrop } from "../UI/Backdrop/Backdrop";
import "./BackgroundVideo.scss";

export const BackgroundVideo = () => {
  return (
    <div className='bg'>
      <Backdrop />
      <video className='bg__video' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
      </video>
    </div>
  );
};
