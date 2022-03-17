import { Rule } from '.';

export class Parameter<T> {
  constructor(public name: string, public value?: T | Rule<T>) {}
}
