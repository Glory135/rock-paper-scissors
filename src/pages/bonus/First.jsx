import React from "react";
import { Sign } from "../../components/Sign";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import spock from "../../images/icon-spock.svg";
import lizard from "../../images/icon-lizard.svg";
import { RandomSign } from "../Home";

export const First = ({
  setPlayerSign,
  setPlayerSignName,
  setStage,
  signs,
  signNames,
  sethouseSign,
  sethouseSignName,
}) => {
  const click = (n) => {
    let ran = RandomSign(5);
    setPlayerSign(signs[n]);
    setPlayerSignName(signNames[n]);
    sethouseSign(signs[ran]);
    sethouseSignName(signNames[ran]);
    setStage("second");
  };
  return (
    <div className='bonus-container-first'>
      <div className='first-main-container'>
        <div className='top'>
          <div onClick={() => click(2)} className='first-sign-container'>
            <Sign sign={scissors} size='130px' signName='scissors' />
          </div>
        </div>
        <div className='middle'>
          <div onClick={() => click(3)} className='first-sign-container'>
            <Sign sign={spock} size='130px' signName='spock' />
          </div>

          <div onClick={() => click(1)} className='first-sign-container'>
            <Sign sign={paper} size='130px' signName='paper' />
          </div>
        </div>
        <div className='bottom'>
          <div onClick={() => click(4)} className='first-sign-container'>
            <Sign sign={lizard} size='130px' signName='lizard' />
          </div>

          <div onClick={() => click(0)} className='first-sign-container'>
            <Sign sign={rock} size='130px' signName='rock' />
          </div>
        </div>
      </div>
    </div>
  );
};
