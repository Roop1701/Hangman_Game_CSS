import React from "react";
const ALL_LETTERS = [..."abcdefghijklmnopqrstuvwxyz"];

export default function Letters({ Playedletters, onSelect }) {
  return (
    <div className="display-flex justify-content-center">
      {ALL_LETTERS.map((alphabet) => (
        <button
          onClick={() => onSelect(alphabet)}
          disabled={Playedletters.has(alphabet)}
          className="letter-button"
        >
          {alphabet}
        </button>
      ))}
    </div>
  );
}
