import React from "react";
import { Sign } from "../../components/Sign";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
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
    let ran = RandomSign(3);
    setPlayerSign(signs[n]);
    setPlayerSignName(signNames[n]);
    sethouseSign(signs[ran]);
    sethouseSignName(signNames[ran]);
    setStage("second");
  };

  return (
    <div className='normal-container-first'>
      <div className='first-main-container'>
        <div className='top'>
          <div onClick={() => click(1)} className='first-sign-container'>
            <Sign sign={paper} signName='paper' size='150px' />
          </div>

          <div onClick={() => click(2)} className='first-sign-container'>
            <Sign sign={scissors} signName='scissors' size='150px' />
          </div>
        </div>
        <div className='bottom'>
          <div onClick={() => click(0)} className='first-sign-container'>
            {" "}
            <Sign sign={rock} signName='rock' size='150px' />
          </div>
        </div>
      </div>
    </div>
  );
};
