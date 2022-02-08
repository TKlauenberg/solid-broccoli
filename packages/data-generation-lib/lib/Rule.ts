import { DataType } from './DataType';

export class Rule {
  constructor(
    public name: string,
    public dataType: DataType,
    private generatorFunction: () => any,
  ) {}
  generate(amount: number): Array<any> {
    return new Array(amount).fill(undefined).map(this.generatorFunction)
  }
}
