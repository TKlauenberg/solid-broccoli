import { Question } from '@serenity-js/core';
import { GenerateData } from '../abilities';

export const CurrentDataGenerator = Question.about<DataGenerator | undefined>(
  `current Data Generator`,
  (actor) => actor.abilityTo(GenerateData).currentDataGenerator,
);

export const CurrentGeneratedData = Question.about<any | undefined>(
  `current generated data`,
  (actor) => actor.abilityTo(GenerateData).generatedData,
);
