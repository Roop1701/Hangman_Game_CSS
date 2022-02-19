import React from "react";
import Lives from "./lives";
import Word from "./word";
import Letters from "./letters";
import Start from "./start";
export default function Layout({
  lives,
  ActualWord,
  played_set,
  guess,
  start,
  isWon,
  isRunning,
}) {
  return (
    <>
      {isRunning && (
        <>
          <Lives livesleft={lives} />
          <Word ActualWord={ActualWord} Playedletters={played_set} />
          <Letters Playedletters={played_set} onSelect={guess} />
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
