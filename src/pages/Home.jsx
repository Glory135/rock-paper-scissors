import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className='home'>
      <Link to='/original'>
        <div className='home-mode-normal-container'></div>
      </Link>
      <div className='line'>
        <h1>Pick a mode</h1>
      </div>
      <Link to='/bonus'>
        <div className='home-mode-bonus-container'></div>
      </Link>
    </div>
  );
};

export const RandomSign = (n) => Math.floor(Math.random() * n);
