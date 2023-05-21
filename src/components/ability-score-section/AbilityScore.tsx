import React from "react";

interface AbilityScoreProps {
  title: string;
  score: number;
  modifier: number;
}
const AbilityScore = ({ title, score, modifier }: AbilityScoreProps) => {
  const abilityName = title.substring(0, 3);
  return (
    <>
      <p className="text-sm text-black uppercase font-bold">{abilityName}</p>
      <p className="text-3xl -mt-2 text-black">{score}</p>
      <p
        className="min-w-[30px] h-6 flex justify-center items-center px-1 
        rounded-full border-2 bg-stone-400 border-stone-600 text-black text-sm font-bold"
      >
        {modifier}
      </p>
    </>
  );
};

export default AbilityScore;
