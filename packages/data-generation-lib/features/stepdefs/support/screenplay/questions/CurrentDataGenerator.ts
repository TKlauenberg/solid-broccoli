import { AnswersQuestions, Question, UsesAbilities } from '@serenity-js/core';
import { GenerateData } from '../abilities';

export class CurrentDataGenerator extends Question<DataGenerator | undefined> {
  constructor() {
    super(`current Data Generator`);
  }
  answeredBy(
    actor: AnswersQuestions & UsesAbilities,
  ): DataGenerator | undefined {
    return actor.abilityTo(GenerateData).currentDataGenerator;
  }
}
