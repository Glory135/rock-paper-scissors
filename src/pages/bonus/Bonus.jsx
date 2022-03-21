import React, { useState } from "react";
import { Header } from "../../components/Header";
import Rules from "../../components/Rules";
import logo from "../../images/logo-bonus.svg";
import img from "../../images/image-rules-bonus.svg";
import { Link } from "react-router-dom";
import { First } from "./First";
import { Second } from "../components/Second";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import spock from "../../images/icon-spock.svg";
import lizard from "../../images/icon-lizard.svg";

const signs = [rock, paper, scissors, spock, lizard];
const signNames = ["rock", "paper", "scissors", "spock", "lizard"];

export const Bonus = () => {
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState("first");
  const [playerSign, setPlayerSign] = useState(null);
  const [playerSignName, setPlayerSignName] = useState("");
  const [houseSign, sethouseSign] = useState(null);
  const [houseSignName, sethouseSignName] = useState("");

  return (
    <div className='bonus'>
      <Header score={score} logo={logo} />
      {stage === "first" ? (
        <First
          setPlayerSign={setPlayerSign}
          setPlayerSignName={setPlayerSignName}
          setStage={setStage}
          stage={stage}
          signs={signs}
          signNames={signNames}
          sethouseSign={sethouseSign}
          sethouseSignName={sethouseSignName}
        />
      ) : stage === "second" ? (
        <Second
          playerSign={playerSign}
          playerSignName={playerSignName}
          houseSign={houseSign}
          houseSignName={houseSignName}
          sethouseSign={sethouseSign}
          sethouseSignName={sethouseSignName}
          signs={signs}
          signNames={signNames}
          setStage={setStage}
          score={score}
          setScore={setScore}
        />
      ) : null}

      <Link to='/original' className='Link'>
        <div className='mode-btn'>CHANGE MODE</div>
      </Link>

      <div
        onClick={() => {
          setScore(0);
          setStage("first");
        }}
        className='over-btn'
      >
        START OVER
      </div>
      <div onClick={() => setOpen(true)} className='rules-btn'>
        RULES
      </div>
      <Rules open={open} setOpen={setOpen} img={img} />
    </div>
  );
};
