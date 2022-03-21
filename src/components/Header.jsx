import React from "react";

export const Header = ({ score, logo }) => {
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='logo-container'>
          <img src={logo} alt='' />
        </div>
        <div className='score-container'>
          <div className='score-main'>
            <p>SCORE</p>
            <h1>{score}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
