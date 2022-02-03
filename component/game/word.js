import React from "react";

export default function Word({ ActualWord, Playedletters }) {
  return (
    <div>
      {[...ActualWord].map((letter) => (
        <>
          {Playedletters.has(letter) ? (
            <span>{letter}</span>
          ) : (
            <span>&nbsp;_&nbsp;</span>
          )}
        </>
      ))}
    </div>
  );
}
