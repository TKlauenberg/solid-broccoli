import { Parameter } from '.';
import { DataType } from './DataType';

export class Rule<T> {
  constructor(
    public name: string,
    public dataType: DataType,
    private generatorFunction: ({}) => T,
    public paramList: Array<Parameter<any>> = [],
  ) {
  }
  generate(): T {
    const generatedParams = this.paramList.reduce(
      (params, {name, value}) => {
        let generatedValue: any;
        if (value instanceof Rule) {
          generatedValue = value.generate();
        } else {
          generatedValue = value;
        }
        params[name] = generatedValue;
        return params;
      },
      {} as { [x: string]: any },
    );
    return this.generatorFunction(generatedParams);
  }
}

const test = [1, 2]
const [a,b] = test
