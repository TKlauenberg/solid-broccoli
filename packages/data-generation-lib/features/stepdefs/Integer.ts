import { Given, Then, When } from '@cucumber/cucumber';
import { Ensure, isGreaterThan, isLessThan } from '@serenity-js/assertions';
import {
  actorCalled,
  actorInTheSpotlight,
  Expectation
} from '@serenity-js/core';
import { CreateNumberGenerator } from './support/screenplay/interactions/CreateNumberGenerator';
import { generateData } from './support/screenplay/interactions/GenerateData';
import { CurrentGeneratedData } from './support/screenplay/questions';
import { IsNumberOfType } from './support/screenplay/questions/Number';

Given(
  '{word} creates a random number type with integer generation between {int} and {int}',
  (name: string, min: number, max: number) =>
    actorCalled(name).attemptsTo(CreateNumberGenerator.between(min).and(max)),
);

When('he/she/they generates a data entry', () =>
  actorInTheSpotlight().attemptsTo(generateData),
);

Then('the data entry is between {int} and {int}', (min: number, max: number) =>
  actorInTheSpotlight().attemptsTo(
    Ensure.that(CurrentGeneratedData, isGreaterThan(min)),
    Ensure.that(CurrentGeneratedData, isLessThan(max)),
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

function isAnInteger(): Expectation<any, number> {
  return Expectation.to<number>('is an integer').soThatActual();
}

Then('the data entry is integer', () =>
  actorInTheSpotlight().attemptsTo(
    Ensure.that(CurrentGeneratedData, isOfType('number')),
    Ensure.that(CurrentGeneratedData, IsNumberOfType.Integer()),
  ),
);
