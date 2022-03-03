import {
  AnswersQuestions,
  Expectation,
  ExpectationMet,
  ExpectationNotMet,
  ExpectationOutcome,
} from '@serenity-js/core';

export const IsNumberOfType = {
  Integer: () => new IsInteger(),
  Float: () => new IsFloat(),
};

class IsInteger extends Expectation<string, number> {
  constructor() {
    super(`value is an integer`);
  }
  answeredBy(
    actor: AnswersQuestions,
  ): (actual: number) => Promise<ExpectationOutcome<string, number>> {
    return async (actual) => {
      if (typeof actual !== 'number') {
        return new ExpectationNotMet(`Value is not of type 'number'`, '', 0);
      }
      if (!Number.isInteger(actual)) {
        return new ExpectationNotMet(`Value is not an Integer`, '', actual);
      }
      return new ExpectationMet('Value is an Integer', '', actual);
    };
  }
}

class IsFloat extends Expectation<string, number> {
  constructor() {
    super(`value is an integer`);
  }
  answeredBy(
    actor: AnswersQuestions,
  ): (actual: number) => Promise<ExpectationOutcome<string, number>> {
    return async (actual) => {
      if (typeof actual !== 'number') {
        return new ExpectationNotMet(`Value is not of type 'number'`, '', 0);
      }
      if (Number.isInteger(actual)) {
        return new ExpectationNotMet(`Value is not a Float`, '', actual);
      }
      return new ExpectationMet('Value is a Float', '', actual);
    };
  }
}
