import React from "react";
const ALL_LETTERS = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

export default function Letters({ Playedletters, onSelect }) {
  return (
    <div>
      {ALL_LETTERS.map((alphabet) => (
        <button
          onClick={() => onSelect(alphabet)}
          disabled={Playedletters.has(alphabet)}
        >
          {alphabet}
        </button>
      ))}
    </div>
  );
}
