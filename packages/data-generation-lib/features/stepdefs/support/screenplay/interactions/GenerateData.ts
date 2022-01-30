import { Interaction } from '@serenity-js/core';
import { GenerateData } from '../abilities';

export const generateData = Interaction.where(
  `#actor generates data with the current DataGenerator`,
  (actor) => actor.abilityTo(GenerateData).generateData(),
);
