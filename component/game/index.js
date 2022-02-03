import React from "react";
import { useState } from "react";
import Lives from "./lives";
import Word from "./word";
import Letters from "./letters";
import Start from "./start";

const MAX_LIVES = 6;
export default function Game() {
  const [ActualWord, setActualWord] = useState("");
  const [Playedletters, setPlayedletters] = useState([]);
  const word_set = new Set([...ActualWord]);
  const wrong_letters = Playedletters.filter((letter) => {
    return !word_set.has(letter);
  });
  const lives = MAX_LIVES - wrong_letters.length;
  const isRunning = ActualWord;
  const isWon =
    isRunning &&
    lives > 0 &&
    [...word_set].reduce((acc, curr) => {
      if (!word_set.has(curr)) return false;
      return acc;
    }, true);
  const guess = (alphabet) => {
    setPlayedletters((prev) => [...prev, alphabet]);
  };

  const start = () => {
    setActualWord("house");
    setPlayedletters([]);
  };

  return (
    <>
      {isRunning && (
        <>
          <Lives livesleft={lives} />
          <Word ActualWord={ActualWord} Playedletters={word_set} />
          <Letters Playedletters={word_set} onLetterClick={guess} />
        </>
      )}

      <Start onStart={start} />
      {isWon && (
        <>
          <div>You won!</div>
        </>
      )}
    </>
  );
}
