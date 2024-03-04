import React from "react";
import NavBar from "./NavBar";
import History from "./History";
import Teams from "./Teams";

const MainPage = () => {
  return (
    <div className='mainPage h-screen flex flex-col overflow-scroll'>
      <NavBar />
      <History />
      <Teams />
    </div>
  );
};

export default MainPage;
