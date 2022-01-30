import { Ability, AnswersQuestions, UsesAbilities } from '@serenity-js/core';

export class GenerateData implements Ability {
  static locally() {
    return new GenerateData();
  }
  static as(actor: UsesAbilities & AnswersQuestions): GenerateData {
    return actor.abilityTo(GenerateData);
  }
  currentDataType?: DataType;
  currentDataGenerator?: DataGenerator;
  generatedData?: any;
  async createDataType(options: {
    name?: string;
    uuid?: string;
    baseType?: string;
    schema?: string;
  }): Promise<DataType> {
    const base = {
      name: 'test',
      uuid: 'asdf',
      baseType: 'base',
      schema: '',
    };
    const { name, uuid, baseType, schema } = Object.assign({}, base, options);
    return new Promise((res) => {
      const newDataType = new DataType(name, uuid, baseType, schema);
      this.currentDataType = newDataType;
      res(newDataType);
    });
  }
  async createDataGenerator(
    type: DataType,
    generate: () => any[],
  ): Promise<DataGenerator> {
    const newDataGenerator = new DataGenerator(type, generate);
    return new Promise((res) => {
      this.currentDataGenerator = newDataGenerator;
      res(newDataGenerator);
    });
  }
  async generateData(dataGenerator?: DataGenerator) {
    if (dataGenerator == undefined) {
      dataGenerator = this.currentDataGenerator;
    }
    this.generatedData = await new Promise((res) =>
      res(dataGenerator!.generate()),
    );
  }
}
