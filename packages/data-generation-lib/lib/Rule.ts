import { DataType } from './DataType';

export class Rule {
  constructor(
    public name: string,
    public dataType: DataType,
    private generatorFunction: () => any,
  ) {}
  generate(): unknown {
    return this.generatorFunction()
  }
}
