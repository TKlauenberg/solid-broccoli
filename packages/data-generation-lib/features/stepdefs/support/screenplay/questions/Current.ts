import { Question } from '@serenity-js/core';
import { Rule } from '../../../../../lib';
import { GenerateData } from '../abilities';

export const CurrentRule = Question.about<Rule | undefined>(
  `current Data Generator`,
  (actor) => actor.abilityTo(GenerateData).currentRule,
);

export const CurrentGeneratedData = Question.about<any | undefined>(
  `current generated data`,
  (actor) => actor.abilityTo(GenerateData).generatedData,
);
