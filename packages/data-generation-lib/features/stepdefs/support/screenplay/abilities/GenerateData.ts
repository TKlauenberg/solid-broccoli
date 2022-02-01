import { Ability, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { DataType, Rule } from '../../../../../lib';

export class GenerateData implements Ability {
  static locally() {
    return new GenerateData();
  }
  static as(actor: UsesAbilities & AnswersQuestions): GenerateData {
    return actor.abilityTo(GenerateData);
  }
  currentDataType?: DataType;
  currentRule?: Rule;
  generatedData?: any;
  async createDataType(options: {
    name?: string;
    uuid?: string;
  }): Promise<DataType> {
    const base = {
      name: 'test',
      uuid: 'asdf',
    };
    const { name, uuid } = Object.assign({}, base, options);
    return new Promise((res) => {
      const newDataType = new DataType(name, uuid);
      this.currentDataType = newDataType;
      res(newDataType);
    });
  }
  async createRule(
    name:string,
    type: DataType,
    generate: () => any[],
  ): Promise<Rule> {
    const newRule = new Rule(name, type, generate);
    return new Promise((res) => {
      this.currentRule = newRule;
      res(newRule);
    });
  }
  async generateData(rule?: Rule) {
    if (rule == undefined) {
      rule = this.currentRule;
    }
    this.generatedData = await new Promise((res) =>
      res(rule!.generate()),
    );
  }
}
