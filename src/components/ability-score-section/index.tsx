import React from "react";
import AbilityScore from "./AbilityScore";
import { character } from "../../helpers/character-data";
import DecoratedBorder from "../borders/Borders";

const getModifier = (score: number) => {
  return (score - 10) / 2;
};

const AbilitySection = () => (
  <div className="max-w-[310px] p-2 flex flex-col mx-auto bg-inherit">
    {character.abilityScores.map((abilityScore) => (
      <DecoratedBorder
        key={abilityScore.id}
        className="w-[70px] h-[70px] flex-col justify-center items-center"
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
