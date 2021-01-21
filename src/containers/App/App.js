import React from "react";
import { BackgroundVideo } from "../../components/BackgroundVideo/BackgroundVideo";
import { Footer } from "../../components/Footer/Footer";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./App.scss";

export const App = () => {
  return (
    <div className='container'>
      <BackgroundVideo />
      <Sidebar />
      <Footer />
    </div>
  );
};
