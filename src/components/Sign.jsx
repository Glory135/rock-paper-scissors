import React from "react";

export const Sign = ({ sign, signName, size }) => {
  return (
    <div
      style={{
        backgroundColor:
          signName === "rock"
            ? "hsl(349, 71%, 52%)"
            : signName === "paper"
            ? "hsl(230, 89%, 62%)"
            : signName === "scissors"
            ? "hsl(39, 89%, 49%)"
            : signName === "lizard"
            ? "hsl(261, 73%, 60%)"
            : signName === "spock"
            ? "hsl(189, 59%, 53%)"
            : null,
        width: size,
        height: size,
      }}
      className='sign'
    >
      <div className='sign-container'>
        <img src={sign} alt='' />
      </div>
    </div>
  );
};
