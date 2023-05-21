import React from "react";
import AbilityScore from "./AbilityScore";
import { character } from "../../helpers/character-data";
import DecoratedBorder from "../borders/Borders";

const getModifier = (score: number) => {
  return (score - 10) / 2;
};

const AbilitySection = () => (
  <div className="max-w-[310px] bg-stone-400 p-2 flex flex-col mx-auto gap-2">
    {character.abilityScores.map((abilityScore) => (
      <DecoratedBorder
        key={abilityScore.id}
        className="w-[65px] h-[65px] flex flex-col justify-center items-center pt-1"
      >
        <AbilityScore
          title={abilityScore.name}
          score={abilityScore.score}
          modifier={getModifier(abilityScore.score)}
        />
      </DecoratedBorder>
    ))}
  </div>
);

export default AbilitySection;
