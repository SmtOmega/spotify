import React from "react";
import { BackgroundVideo } from "../../components/BackgroundVideo/BackgroundVideo";
import { Footer } from "../../components/Footer/Footer";
import "./App.scss";

export const App = () => {
  return (
    <div className='container'>
      <BackgroundVideo />
      <Footer />
    </div>
  );
};
