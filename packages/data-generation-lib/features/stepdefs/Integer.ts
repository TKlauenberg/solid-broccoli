import { Given, Then, When } from '@cucumber/cucumber';
import {
  Ensure,
  equals,
  isGreaterThan,
  isLessThan,
  or,
} from '@serenity-js/assertions';
import {
  actorCalled,
  actorInTheSpotlight,
  Expectation,
  Log,
} from '@serenity-js/core';
import { CreateIntegerGenerator } from './support/screenplay/interactions/CreateIntegerGenerator';
import { generateData } from './support/screenplay/interactions/GenerateData';
import { CurrentGeneratedData } from './support/screenplay/questions';
import { IsNumberOfType } from './support/screenplay/questions/Number';

Given(
  '{word} creates a random number type with integer generation between {int} and {int}',
  (name: string, min: number, max: number) =>
    actorCalled(name).attemptsTo(CreateIntegerGenerator.between(min).and(max)),
);

When('he/she/they generates a data entry', () =>
  actorInTheSpotlight().attemptsTo(generateData),
);

Then('the data entry is between {int} and {int}', (min: number, max: number) =>
  actorInTheSpotlight().attemptsTo(
    Ensure.that(CurrentGeneratedData, or(isGreaterThan(min), equals(min))),
    Ensure.that(CurrentGeneratedData, or(isLessThan(max), equals(max))),
    Log.the(CurrentGeneratedData),
  ),
);

function isOfType(expected: string): Expectation<any> {
  return Expectation.thatActualShould<string, any>(
    'be of type',
    expected,
  ).soThat(
    (actualValue, expectedValue) => typeof actualValue === expectedValue,
  );
}

Then('the data entry is integer', () =>
  actorInTheSpotlight().attemptsTo(
    Ensure.that(CurrentGeneratedData, isOfType('number')),
    Ensure.that(CurrentGeneratedData, IsNumberOfType.Integer()),
  ),
);
