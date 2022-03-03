import { DataType, Rule } from '..';

export const floatDataType = new DataType('', 'Float');

export const between = (min: number, max: number) => {
  const generate = () => Math.random() * (max - min) + min;

  return new Rule(`Float between ${min} and ${max}`, floatDataType, generate);
};
