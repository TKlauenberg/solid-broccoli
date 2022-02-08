import { Interaction } from '@serenity-js/core';
import { GenerateData } from '../abilities';

export const generate = (amount: number) => {
  return {
    dataEntries: Interaction.where(
      `#actor generates ${amount} data entries with the current DataGenerator`,
      (actor) => actor.abilityTo(GenerateData).generateData(amount),
    ),
  };
};
