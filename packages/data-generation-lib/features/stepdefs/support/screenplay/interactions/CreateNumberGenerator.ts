import {
  AnswersQuestions,
  Interaction,
  UsesAbilities,
} from '@serenity-js/core';
import { GenerateData } from '../abilities';

export class CreateNumberGenerator extends Interaction {
  static between(start: number) {
    return {
      and: (end: number) => new CreateNumberGenerator(start, end),
    };
  }
  constructor(private min: number, private max: number) {
    super();
  }
  get betweenFunction() {
    return () => {
      return [Math.floor(Math.random() * (this.max - this.min + 1) + this.min)]
    }
  }
  async performAs(actor: UsesAbilities & AnswersQuestions): Promise<void> {
    const generateData = actor.abilityTo(GenerateData)
    const dataType = await generateData.createDataType({})
    await generateData.createDataGenerator(dataType,this.betweenFunction)
  }

  toString(): string{
    return `#actor creates a DataGenerator for Numbers between ${this.min} and ${this.max}`
  }
}
