import { DataType, Parameter, Rule } from '..';

export const intDataType = new DataType('', 'Integer');

export const Between = new Rule(
  `Integer between min and max value which can be parametizized`,
  intDataType,
  ({ min, max }: { min: number; max: number }) =>
    Math.floor(Math.random() * (max - min + 1) + min),
  [new Parameter('min', 0), new Parameter('max', 1000)],
);
