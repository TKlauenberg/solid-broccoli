import {
  AnswersQuestions,
  Interaction,
  UsesAbilities,
} from '@serenity-js/core';
import { Integer } from '../../../../../lib';
import { GenerateData } from '../abilities';

export class CreateIntegerGenerator extends Interaction {
  static between(start: number) {
    return {
      and: (end: number) => new CreateIntegerGenerator(start, end),
    };
  }
  constructor(private min: number, private max: number) {
    super();
  }
  async performAs(actor: UsesAbilities & AnswersQuestions): Promise<void> {
    const generateData = actor.abilityTo(GenerateData);
    const rule = Integer.between(this.min, this.max);
    await generateData.setRule(rule);
  }

  toString(): string {
    return `#actor creates a DataGenerator for Numbers between ${this.min} and ${this.max}`;
  }
}
