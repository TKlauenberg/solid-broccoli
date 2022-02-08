import { DataType, Rule } from '..';

export const intDataType = new DataType('', 'Integer');

export const between = (min: number, max: number) => {
  const generate = () => Math.floor(Math.random() * (max - min + 1) + min);

  return new Rule(`Integer between ${min} and ${max}`, intDataType, generate);
};
