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
      <div className="game-wrapper">
        {isRunning && (
          <>
            <div className="left-pane">
              <Lives livesleft={lives} />
            </div>

            <div className="right-pane">
              <Word ActualWord={ActualWord} Playedletters={played_set} />
              <Letters Playedletters={played_set} onSelect={guess} />
            </div>
          </>
        )}

        <Start onStart={start} isRunning={isRunning} />
        {isWon && (
          <>
            <div>You won!</div>
          </>
        )}
      </div>
    </>
  );
}
