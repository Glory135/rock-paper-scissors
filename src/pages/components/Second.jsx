import React, { useEffect, useState } from "react";
import { Sign } from "../../components/Sign";

export const Second = ({
  playerSign,
  playerSignName,
  houseSign,
  houseSignName,
  setStage,
  score,
  setScore,
}) => {
  const [status, setStatus] = useState("draw");

  useEffect(() => {
    if (playerSignName === houseSignName) {
      setStatus("draw");
      setScore(score);
    } else if (playerSignName === "rock" && houseSignName === "scissors") {
      setStatus("win");
      setScore(score + 1);
    } else if (playerSignName === "rock" && houseSignName === "spock") {
      setStatus("win");
      setScore(score + 1);
    } else if (playerSignName === "paper" && houseSignName === "rock") {
      setStatus("win");
      setScore(score + 1);
    } else if (playerSignName === "paper" && houseSignName === "spock") {
      setStatus("win");
      setScore(score + 1);
    } else if (playerSignName === "scissors" && houseSignName === "paper") {
      setStatus("win");
      setScore(score + 1);
    } else if (playerSignName === "scissors" && houseSignName === "lizard") {
      setStatus("win");
      setScore(score + 1);
    } else if (playerSignName === "spock" && houseSignName === "scissors") {
      setStatus("win");
      setScore(score + 1);
    } else if (playerSignName === "spock" && houseSignName === "rock") {
      setStatus("win");
      setScore(score + 1);
    } else if (playerSignName === "lizard" && houseSignName === "spock") {
      setStatus("win");
      setScore(score + 1);
    } else if (playerSignName === "lizard" && houseSignName === "paper") {
      setStatus("win");
      setScore(score + 1);
    } else {
      setStatus("lose");
      setScore(score - 1);
    }
  }, [playerSignName, houseSignName]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='normal-container-second'>
      <div className='second-main-container'>
        <div className='player'>
          <h3>YOU PICKED</h3>
          <div className='player-sign-container'>
            <div
              style={{ display: status === "win" ? "block" : "none" }}
              className='winHighlight'
            ></div>
            <Sign sign={playerSign} signName={playerSignName} size='230px' />
          </div>
        </div>

        <div className='game-final-container'>
          <h1>
            {status === "win"
              ? "YOU WIN"
              : status === "lose"
              ? "YOU LOSE"
              : status === "draw"
              ? "DRAW"
              : null}
          </h1>
          <div onClick={() => setStage("first")} className='again-btn'>
            PLAY AGAIN
          </div>
        </div>
        <div className='house'>
          <h3>THE HOUSE PICKED</h3>

          <div className='house-sign-container'>
            <div className='house-sign-outline'></div>
            <div className='house-sign-main-container'>
              <div
                style={{ display: status === "lose" ? "block" : "none" }}
                className='winHighlight'
              ></div>
              <Sign sign={houseSign} signName={houseSignName} size='230px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
