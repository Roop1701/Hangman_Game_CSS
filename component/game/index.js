import React from "react";
import { useState } from "react";
import Layout from "./layout";

const MAX_LIVES = 6;
export default function Game() {
  const [ActualWord, setActualWord] = useState("");
  const [Playedletters, setPlayedletters] = useState([]);
  const word_set = new Set([...ActualWord]);
  const played_set = new Set([...Playedletters]);
  const wrong_letters = Playedletters.filter((letter) => {
    return !word_set.has(letter);
  });
  const lives = MAX_LIVES - wrong_letters.length;
  const isWon =
    lives > 0 &&
    [...word_set].reduce((acc, curr) => {
      if (!played_set.has(curr)) return false;

      return acc;
    }, true);
  const isRunning = ActualWord && lives >= 0 && !isWon;

  const guess = (alphabet) => {
    setPlayedletters((prev) => [...prev, alphabet]);
  };

  const start = () => {
    setActualWord("house");
    setPlayedletters([]);
  };

  return (
    <>
      <Layout
        lives={lives}
        ActualWord={ActualWord}
        played_set={played_set}
        guess={guess}
        start={start}
        isWon={isWon}
        isRunning={isRunning}
      />
    </>
  );
}
