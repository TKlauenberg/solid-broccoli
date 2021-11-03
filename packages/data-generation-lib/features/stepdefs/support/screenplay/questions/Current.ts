import { AnswersQuestions, Question, UsesAbilities } from '@serenity-js/core';
import { GenerateData } from '../abilities';
import { CurrentDataGenerator } from './CurrentDataGenerator';

export class Current {
  static DataGenerator = new CurrentDataGenerator()
}
